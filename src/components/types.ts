export interface PlayerProps {
	src: string
	phrases: Phrase[]
	contentRef: React.RefObject<HTMLIonContentElement>
}

export interface PhrasesBlockProps {
	phrases: Phrase[]
	phraseRefs: React.MutableRefObject<HTMLDivElement[]>
	playerState: PlayerState
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

export interface Phrase {
	start: number
	end: number
	id: string
	identifier?: string
	text: string
}
