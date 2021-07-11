export interface PlayerProps {
	mediaLink: string
	phrases: Phrase[]
	phrasesTr?: PhraseTr[]
	contentRef: React.RefObject<HTMLIonContentElement>
}

export interface PhrasesBlockProps {
	phrases: Phrase[]
	phrasesTr?: PhraseTr[]
	phraseRefs: React.MutableRefObject<HTMLDivElement[]>
	playerState: PlayerState
	playerHandlers: PlayerExternalHandlers
}

export interface PlayerBasicControlsProps {
	playerHandlers: PlayerExternalHandlers
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
	playOnePhrase: boolean
	/** start time point for chapter/interval display. By default: 0 */
	start: number
	/** end time point for chapter/interval display. By default: duration */
	end: number
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
	playPhrase: (phraseNum: number) => void
	playNextPhrase: () => void
	playPrevPhrase: () => void
	playCurrentPhrase: () => void
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
	voiceName?: string
}

export interface PhraseTr {
	start?: number
	end?: number
	id: string
	identifier?: string
	text: string
	voiceName?: string
}

export interface Chapter {
	start?: number
	end?: number
	title: string
}
