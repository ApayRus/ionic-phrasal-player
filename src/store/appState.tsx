import { makeAutoObservable } from 'mobx'
import { Chapter, Phrase, PhraseTr } from '../components/types'

class Store {
	constructor() {
		makeAutoObservable(this)
	}

	currentChapterNum = -1
	currentPhraseNum = 0

	chapters: Chapter[] = []
	chaptersTr: Chapter[] = []

	phrases: Phrase[] = []
	phrasesTr: PhraseTr[] = []

	setCurrentChapterNum(index: number) {
		this.currentChapterNum = index
	}
	setCurrentPhraseNum(index: number) {
		this.currentPhraseNum = index
	}
	setChapters(chapters: Chapter[]) {
		this.chapters = chapters
	}
	setChaptersTr(chapters: Chapter[]) {
		this.chaptersTr = chapters
	}
	setPhrases(phrases: Phrase[]) {
		this.phrases = phrases
	}
	setPhrasesTr(phrasesTr: PhraseTr[]) {
		this.phrasesTr = phrasesTr
	}
}

const appState = new Store()

export default appState
