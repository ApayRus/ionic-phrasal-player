// import { Phrases } from '../../src/components/types'

declare module 'frazy-parser' {
	export function formatSecondsToTime(time: number): string
	export function findCurrentPhraseNum(phrases, time: number)
	export function parseSubs(text: string)
	export function parseVtt(text: string): any[]
	export function parseChapters(text: string)
}
