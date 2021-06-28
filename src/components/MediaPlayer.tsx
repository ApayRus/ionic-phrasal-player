import React, { useRef, useState, useEffect, useMemo } from 'react'
import PlayerBasicControls from './PlayerBasicControls'
import PlayerPhrasalControls from './PlayerPhrasalControls'
import PhrasesBlock from './PhrasesBlock'
import {
	PlayerState,
	PlayerExternalHandlers,
	PlayerInternalHandlers,
	PlayerProps
} from './types'
import { findCurrentPhraseNum } from 'frazy-parser'
import './MediaPlayer.css'

const MediaPlayer: React.FC<PlayerProps> = props => {
	const { src, phrases, phrasesTr, contentRef } = props

	const mediaRef = useRef<HTMLVideoElement>(null) // to control media element (pause, play)
	const stickyPlayerContainerRef = useRef<HTMLDivElement>(null) // to know size of player container
	const phraseRefs = useRef<HTMLDivElement[]>([]) //to pass to child to know each phrase size (offsetTop)

	const [playerState, setPlayerState] = useState<PlayerState>({
		isPlaying: false,
		currentTime: 0,
		duration: 0,
		isReady: false,
		playbackRate: 1,
		currentPhraseNum: 0,
		hideVideo: false,
		playOnePhrase: false
	})

	const {
		currentPhraseNum,
		duration,
		currentTime,
		playbackRate,
		hideVideo,
		isPlaying,
		playOnePhrase
	} = playerState

	const scrollPhrasesBlock = (currentPhraseNum: number, delta: number) => {
		if (currentPhraseNum <= 0 || currentPhraseNum >= phrases.length) {
			return
		}
		const { height: videoHeight = 0 } =
			stickyPlayerContainerRef.current?.getBoundingClientRect() || {}
		const currentPhraseY = phraseRefs.current[currentPhraseNum].offsetTop
		contentRef?.current?.scrollToPoint(
			null,
			currentPhraseY - videoHeight + delta,
			1000
		)
	}

	useEffect(() => {
		if (!playOnePhrase) {
			hideVideo
				? scrollPhrasesBlock(currentPhraseNum - 3, -2)
				: scrollPhrasesBlock(currentPhraseNum, -2)
		}
	}, [currentPhraseNum])

	// internal handlers (execute here)

	const onTimeUpdate = () => {
		//basic player
		const { currentTime } = mediaRef.current!
		setPlayerState(prevState => ({ ...prevState, currentTime }))
		//phrasal player
		const { currentPhraseNum } = playerState
		const { end: currentPhaseEnd } = phrases[playerState.currentPhraseNum] || {}
		if (
			currentTime > currentPhaseEnd &&
			currentPhraseNum < phrases.length - 1
		) {
			setPlayerState(prevState => ({
				...prevState,
				currentPhraseNum: currentPhraseNum + 1
			}))
		}
	}
	const onTimeUpdateOnePhrase = () => {
		const { currentTime } = mediaRef.current!
		setPlayerState(prevState => ({ ...prevState, currentTime }))
		const { end: currentPhaseEnd } = phrases[currentPhraseNum] || {}

		if (currentTime >= currentPhaseEnd) {
			pause()
		}
	}
	const onPlay = () => {
		setPlayerState(prevState => ({ ...prevState, isPlaying: true }))
	}
	const onPause = () => {
		setPlayerState(prevState => ({
			...prevState,
			isPlaying: false,
			playOnePhrase: false
		}))
	}
	const onDurationChange = () => {
		const { duration = 0 } = mediaRef.current!
		setPlayerState(prevState => ({ ...prevState, duration }))
	}

	// external handlers (execute in children)

	const play = () => {
		mediaRef.current!.play()
	}
	const pause = () => {
		mediaRef.current!.pause()
	}
	const syncCurrentPhraseNum = (time: number) => {
		const currentPhraseNum = findCurrentPhraseNum(phrases, time)
		setPlayerState(prevState => ({ ...prevState, currentPhraseNum }))
	}

	const seek = (time: number) => {
		mediaRef.current!.currentTime = time
		syncCurrentPhraseNum(time)
	}
	const playPlus10 = () => {
		const time = mediaRef.current!.currentTime + 10
		mediaRef.current!.currentTime = time
		syncCurrentPhraseNum(time)
	}
	const playMinus10 = () => {
		const time = mediaRef.current!.currentTime - 10
		mediaRef.current!.currentTime = time
		syncCurrentPhraseNum(time)
	}

	const changeRate = () => {
		mediaRef.current!.playbackRate = mediaRef.current!.playbackRate + 0.25
		if (mediaRef.current!.playbackRate > 2)
			mediaRef.current!.playbackRate = 0.25
		setPlayerState(prevState => {
			const { playbackRate = 1 } = mediaRef.current! || {}
			return {
				...prevState,
				playbackRate
			}
		})
	}
	const toggleVideo = () => {
		setPlayerState(prevState => ({
			...prevState,
			hideVideo: !prevState.hideVideo
		}))
		if (hideVideo) {
			scrollPhrasesBlock(currentPhraseNum, -2)
		} else {
			scrollPhrasesBlock(currentPhraseNum - 3, -8)
		}
	}
	// phrasal control handlers
	const playPhrase = (phraseNum: number) => {
		if (phraseNum < 0 || phraseNum >= phrases.length) {
			return
		}
		setPlayerState(prevState => ({
			...prevState,
			currentPhraseNum: phraseNum,
			playOnePhrase: true
		}))
		const { start } = phrases[phraseNum]
		mediaRef.current!.currentTime = start
		mediaRef.current!.play()
	}
	const playNextPhrase = () => {
		playPhrase(currentPhraseNum + 1)
		scrollPhrasesBlock(currentPhraseNum - 1, -2)
	}
	const playCurrentPhrase = () => {
		playPhrase(currentPhraseNum)
		scrollPhrasesBlock(currentPhraseNum - 2, -2)
	}
	const playPrevPhrase = () => {
		playPhrase(currentPhraseNum - 1)
		scrollPhrasesBlock(currentPhraseNum - 3, -2)
	}

	const playerHandlers: PlayerExternalHandlers = {
		play,
		pause,
		seek,
		playPlus10,
		playMinus10,
		changeRate,
		toggleVideo,
		playPhrase,
		playNextPhrase,
		playPrevPhrase,
		playCurrentPhrase
	}

	const playerIntHandlers: PlayerInternalHandlers = {
		onTimeUpdate: playOnePhrase ? onTimeUpdateOnePhrase : onTimeUpdate,
		onPlay,
		onPause,
		onDurationChange
	}

	return (
		<>
			<div
				style={{ position: 'sticky', top: 0 }}
				className='stickyPlayerContainer'
				ref={stickyPlayerContainerRef}
			>
				<video
					playsInline
					ref={mediaRef}
					style={{
						width: '100%',
						display: playerState.hideVideo ? 'none' : 'unset'
					}}
					{...playerIntHandlers}
				>
					<source {...{ src }} />
				</video>
				{useMemo(
					() => (
						<PlayerBasicControls {...{ playerHandlers, playerState }} />
					),
					// eslint-disable-next-line react-hooks/exhaustive-deps
					[duration, currentTime, playbackRate, hideVideo, isPlaying]
				)}
			</div>
			{useMemo(
				() => (
					<PhrasesBlock
						{...{ phrases, phrasesTr, playerState, phraseRefs, playerHandlers }}
					/>
				),
				[currentPhraseNum]
			)}
			<div style={{ position: 'sticky', bottom: 0 }}>
				{useMemo(
					() => (
						<PlayerPhrasalControls {...{ playerHandlers, playerState }} />
					),
					[isPlaying, currentPhraseNum]
				)}
			</div>
		</>
	)
}

export default MediaPlayer
