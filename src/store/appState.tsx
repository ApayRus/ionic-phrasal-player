import { makeAutoObservable } from 'mobx'
import { Chapter } from '../components/types'

class Store {
	constructor() {
		makeAutoObservable(this)
	}

	currentChapterNum = -1

	chapters: Chapter[] = []
	chaptersTr: Chapter[] = []

	setCurrentChapterNum(index: number) {
		this.currentChapterNum = index
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
