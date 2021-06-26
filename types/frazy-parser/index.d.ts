// import { Phrases } from '../../src/components/types'

declare module 'frazy-parser' {
	export function formatSecondsToTime(time: number): string
	export function findCurrentPhraseNum(phrases, time: number)
}
