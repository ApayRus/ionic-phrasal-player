/**
 * This module:
 * 1) extracts from main vtt file all data-links as:
 * mediaLink and translations, and
 * 2) parse them for our app
 */

import { parseVtt } from 'frazy-parser'
import { Chapter, Comment, Phrase, PhraseTr } from '../components/types'

/**
 *
 * @param text VTT file content
 * @returns Array <Info | Chapter | Comment | Cue ]
 */
const parseSubs = (text: string): Array<Chapter | Comment | Phrase> => {
	const zeroPhrase = { start: 0, end: 0, id: 0, text: '' }

	const contentFeed = parseVtt(text).map((elem: any) => {
		const { type } = elem
		if (type !== 'cue') return elem

		const { body } = elem
		const [bodyFirstObject] = body
		const { voice: { name: voiceName = '' } = {}, text = '' } =
			bodyFirstObject || {}
		return { ...elem, voiceName, text }
	})
	contentFeed.unshift(zeroPhrase)
	return contentFeed
}
