declare module 'frazy-parser' {
	export function formatSecondsToTime(time: number): string
	export function findCurrentPhraseNum(phrases, time: number): number
	export function parseSubs(text: string): Phrase[]
	export function parseVtt(
		text: string
	): Array<Info | Chapter | Phrase | Comment>
	export function parseChapters(text: string): Chapter[]
}
