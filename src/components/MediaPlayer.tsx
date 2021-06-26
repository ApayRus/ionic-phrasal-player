import React, { useRef, useState, useEffect, useMemo } from 'react'
import PlayerBasicControls from './PlayerBasicControls'
import PhrasesBlock from './PhrasesBlock'
import {
	PlayerState,
	PlayerExternalHandlers,
	PlayerInternalHandlers,
	PlayerProps
} from './types'
import { findCurrentPhraseNum } from 'frazy-parser'

const MediaPlayer: React.FC<PlayerProps> = props => {
	const { src, phrases, contentRef } = props

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
			scrollPhrasesBlock(currentPhraseNum, -2)
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
	const playPhrase = (phraseNum: number) => {
		const { start } = phrases[phraseNum]
		setPlayerState(prevState => ({
			...prevState,
			currentPhraseNum: phraseNum,
			playOnePhrase: true
		}))
		mediaRef.current!.currentTime = start
		mediaRef.current!.play()
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
		setPlayerState(prevState => {
			const hideVideo = !prevState.hideVideo
			scrollPhrasesBlock(currentPhraseNum, prevState.hideVideo ? -2 : -8)

			return {
				...prevState,
				hideVideo
			}
		})
	}

	const playerHandlers: PlayerExternalHandlers = {
		play,
		pause,
		seek,
		playPlus10,
		playMinus10,
		changeRate,
		toggleVideo,
		playPhrase
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
			<PhrasesBlock {...{ phrases, playerState, phraseRefs, playerHandlers }} />
		</>
	)
}

export default MediaPlayer
