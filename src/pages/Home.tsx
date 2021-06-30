import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import { useEffect, useRef, useState } from 'react'
import { parseSubs, parseChapters } from 'frazy-parser'
import MediaPlayer from '../components/MediaPlayer'
import './Home.css'
import { Phrase, PhraseTr } from '../components/types'

const Home: React.FC = props => {
	const contentRef = useRef<HTMLIonContentElement>(null)!
	const loadedDataRef = useRef<{
		mediaLink: string
		phrases: Phrase[]
		phrasesTr?: PhraseTr[]
	}>({ mediaLink: '', phrases: [], phrasesTr: [] })
	const [isDataLoaded, setIsDataLoaded] = useState(false)

	useEffect(() => {
		const loadData = async () => {
			const mediaLink = 'http://192.168.0.189:8080/moana320x135.mp4'

			const text = await fetch('http://192.168.0.189:8080/en.vtt').then(res =>
				res.text()
			)
			const textTr = await fetch('http://192.168.0.189:8080/ru.vtt').then(res =>
				res.text()
			)

			const transformSubs = (text: string): Phrase[] => {
				const zeroPhrase = { start: 0, end: 0, id: 0, text: '' }
				const phrases = parseSubs(text).map((elem: any) => {
					const { body } = elem
					const [bodyFirstObject] = body
					const { voice: { name: voiceName = '' } = {}, text = '' } =
						bodyFirstObject || {}
					return { ...elem, voiceName, text }
				})
				phrases.unshift(zeroPhrase)
				return phrases
			}

			const phrases = transformSubs(text)
			const phrasesTr = transformSubs(textTr)

			const chapters = parseChapters(text)
			const chaptersTr = parseChapters(textTr)

			loadedDataRef.current = { mediaLink, phrases, phrasesTr }
			setIsDataLoaded(true)
			console.log('loadedDataRef.current')
			console.log(loadedDataRef.current)
		}
		loadData()

		return () => {
			// cleanup
		}
	}, [])

	return (
		<IonPage>
			<IonContent fullscreen ref={contentRef}>
				{isDataLoaded && (
					<MediaPlayer {...{ ...loadedDataRef.current, contentRef }} />
				)}
			</IonContent>
		</IonPage>
	)
}

export default Home
