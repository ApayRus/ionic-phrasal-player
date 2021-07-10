import { makeAutoObservable } from 'mobx'
import { Chapter } from '../components/types'

class Store {
	constructor() {
		makeAutoObservable(this)
	}

	currentChapterIndex = -1

	chapters: Chapter[] = []
	chaptersTr: Chapter[] = []

	setCurrentChapterIndex(index: number) {
		this.currentChapterIndex = index
	}
	setChapters(chapters: Chapter[]) {
		this.chapters = chapters
	}
	setChaptersTr(chapters: Chapter[]) {
		this.chaptersTr = chapters
	}
}

const appState = new Store()

export default appState
