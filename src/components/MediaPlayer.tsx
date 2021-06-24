import React, { useRef, useState } from 'react'
import PlayerBasicControls from './PlayerBasicControls'

interface PlayerProps {
	src: string
}

export interface PlayerState {
	isPlaying: boolean
	currentTime: number
	duration: number
	isReady: boolean
	playbackRate: number
	currentPhraseNum: number
	hideVideo: boolean
}

// to pass to children
export interface PlayerExternalHandlers {
	play: () => void
	pause: () => void
	seek: (time: number) => void
	playPlus10: () => void
	playMinus10: () => void
	changeRate: () => void
	toggleVideo: () => void
}

// to use here
export interface PlayerInternalHandlers {
	onTimeUpdate: () => void
	onPlay: () => void
	onPause: () => void
	onDurationChange: () => void
}

const MediaPlayer: React.FC<PlayerProps> = props => {
	const { src } = props

	const mediaRef = useRef<HTMLVideoElement>(null)

	const [playerState, setPlayerState] = useState<PlayerState>({
		isPlaying: false,
		currentTime: 0,
		duration: 0,
		isReady: false,
		playbackRate: 1,
		currentPhraseNum: 0,
		hideVideo: false
	})

	const play = () => {
		if (!mediaRef.current) return
		mediaRef.current.play()
	}
	const pause = () => {
		if (!mediaRef.current) return
		mediaRef.current.pause()
	}
	const seek = (time: number) => {
		if (!mediaRef.current) return
		mediaRef.current.currentTime = time
	}
	const playPlus10 = () => {
		if (!mediaRef.current) return
		mediaRef.current.currentTime = mediaRef.current.currentTime + 10
	}
	const playMinus10 = () => {
		if (!mediaRef.current) return
		mediaRef.current.currentTime = mediaRef.current.currentTime - 10
	}
	const changeRate = () => {
		if (!mediaRef.current) return
		mediaRef.current.playbackRate = mediaRef.current.playbackRate + 0.25
		if (mediaRef.current.playbackRate > 2) mediaRef.current.playbackRate = 0.25
		setPlayerState(prevState => {
			const { playbackRate = 1 } = mediaRef.current || {}
			return {
				...prevState,
				playbackRate
			}
		})
	}
	const onTimeUpdate = () => {
		if (!mediaRef.current) return
		const { currentTime } = mediaRef.current
		setPlayerState(prevState => ({ ...prevState, currentTime }))
	}
	const onPlay = () => {
		setPlayerState(prevState => ({ ...prevState, isPlaying: true }))
	}
	const onPause = () => {
		setPlayerState(prevState => ({ ...prevState, isPlaying: false }))
	}
	const onDurationChange = () => {
		if (!mediaRef.current) return
		const { duration } = mediaRef.current
		setPlayerState(prevState => ({ ...prevState, duration }))
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
		onTimeUpdate,
		onPlay,
		onPause,
		onDurationChange
	}

	return (
		<>
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
			<PlayerBasicControls {...{ playerHandlers, playerState }} />
		</>
	)
}

export default MediaPlayer
