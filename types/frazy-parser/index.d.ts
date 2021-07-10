// import {  } from '../../src/components/types'

// import { Chapter, Phrase } from '../../src/components/types'

declare module 'frazy-parser' {
	export function formatSecondsToTime(time: number): string
	export function findCurrentPhraseNum(phrases, time: number): number
	export function parseSubs(text: string): Phrase[]
	export function parseVtt(text: string): any[]
	export function parseChapters(text: string): Chapter[]
}
