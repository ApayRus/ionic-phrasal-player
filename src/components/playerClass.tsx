import mitt from 'mitt'

type phrase = {
	start: number
	end: number
	id: string
	identifier: string
	text: string
}

export default class Player {
	constructor(
		private mediaElement: HTMLVideoElement | HTMLAudioElement,
		private phrases?: phrase[],
		private interval?: [number, number],
		private hideVideo: boolean = false
	) {
		if (this.mediaElement) {
			this.mediaElement.ontimeupdate = this.onTimeUpdate
			this.mediaElement.ondurationchange = this.durationChange
			this.mediaElement.onplay = this.onPlay
			this.mediaElement.onpause = this.onPause
		}
		console.log(this)
	}

	events = mitt()

	play = (): void => {
		this?.mediaElement?.play()
	}
	pause = (): void => {
		this?.mediaElement?.pause()
	}
	seek = (time: number): void => {
		this.mediaElement.currentTime = time
		this.events.emit('currentTime', time)
	}
	playPlus10 = (): void => {
		this.mediaElement.currentTime = this.mediaElement.currentTime + 10
	}
	playMinus10 = (): void => {
		this.mediaElement.currentTime = this.mediaElement.currentTime - 10
	}
	changeRate() {
		this.mediaElement.playbackRate = this.mediaElement.playbackRate + 0.25
		if (this.mediaElement.playbackRate > 2)
			this.mediaElement.playbackRate = 0.25
		this.events.emit('playbackRate', this.mediaElement.playbackRate)
	}
	onTimeUpdate = (e: Event): void => {
		const { currentTime } = this.mediaElement
		this.events.emit('currentTime', currentTime)
	}
	onPause = (e: Event): void => {
		this.events.emit('isPlaying', false)
	}
	onPlay = (e: Event): void => {
		this.events.emit('isPlaying', true)
	}
	toggleVideo = () => {
		this.hideVideo = !this.hideVideo
		this.events.emit('hideVideo', this.hideVideo)
	}
	durationChange = (e: Event): void => {
		const { duration } = this.mediaElement
		this.events.emit('duration', duration)
	}
}
