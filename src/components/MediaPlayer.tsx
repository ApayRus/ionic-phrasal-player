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

	const mediaRef = useRef<HTMLVideoElement>(null)

	const phraseRefs = useRef<HTMLDivElement[]>([])

	const [playerState, setPlayerState] = useState<PlayerState>({
		isPlaying: false,
		currentTime: 0,
		duration: 0,
		isReady: false,
		playbackRate: 1,
		currentPhraseNum: 0,
		hideVideo: false
	})
	const {
		currentPhraseNum,
		duration,
		currentTime,
		playbackRate,
		hideVideo,
		isPlaying
	} = playerState
	useEffect(() => {
		const currentPhraseY = phraseRefs.current[currentPhraseNum].offsetTop
		contentRef?.current?.scrollToPoint(null, currentPhraseY - 300, 1000)
	}, [currentPhraseNum])

	// internal handlers (execute here)

	const onTimeUpdate = () => {
		const { currentTime } = mediaRef.current!
		setPlayerState(prevState => ({ ...prevState, currentTime }))
	}
	const onTimeUpdateWithPhrases = () => {
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
	const onPlay = () => {
		setPlayerState(prevState => ({ ...prevState, isPlaying: true }))
	}
	const onPause = () => {
		setPlayerState(prevState => ({ ...prevState, isPlaying: false }))
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
	}

	const playerHandlers: PlayerExternalHandlers = {
		play,
		pause,
		seek,
		playPlus10,
		playMinus10,
		changeRate,
		toggleVideo
	}

	const playerIntHandlers: PlayerInternalHandlers = {
		onTimeUpdate: phrases.length > 0 ? onTimeUpdateWithPhrases : onTimeUpdate,
		onPlay,
		onPause,
		onDurationChange
	}

	return (
		<>
			<div style={{ position: 'sticky', top: 0 }}>
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
			<PhrasesBlock {...{ phrases, playerState, phraseRefs }} />
		</>
	)
}

export default MediaPlayer
