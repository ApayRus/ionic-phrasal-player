// import './MediaPlayer.css';
import React, { useRef, useState, useEffect } from 'react'

import Player from './playerClass'
import PlayerControls from './PlayerControls'

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

const MediaPlayer: React.FC<PlayerProps> = props => {
	const { src } = props

	const mediaRef = useRef<any>(null)

	const playerRef = useRef<Player | null>(null)

	const [playerState, setPlayerState] = useState<PlayerState>({
		isPlaying: false,
		currentTime: 0,
		duration: 0,
		isReady: false,
		playbackRate: 1,
		currentPhraseNum: 0,
		hideVideo: false
	})

	useEffect(() => {
		playerRef.current = new Player(mediaRef.current)
		playerRef.current.events.on('*', (eventType, eventValue) => {
			// console.log(eventType, eventValue)
			setPlayerState(prevState => ({
				...prevState,
				[eventType]: eventValue
			}))
		})
	}, [])

	return (
		<>
			<video
				playsInline
				ref={mediaRef}
				style={{
					width: '100%',
					display: playerState.hideVideo ? 'none' : 'unset'
				}}
			>
				<source {...{ src }} />
			</video>
			<PlayerControls playerRef={playerRef.current} playerState={playerState} />
		</>
	)
}

export default MediaPlayer
