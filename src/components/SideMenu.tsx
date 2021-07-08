import { useEffect, useRef, useState } from 'react'
import {
	IonMenu,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonLabel
} from '@ionic/react'
import { parseChapters } from 'frazy-parser'
import { Chapter } from './types'
import './SideMenu.css'

const SideMenu: React.FC = () => {
	const loadedDataRef = useRef<{ chapters: Chapter[]; chaptersTr: Chapter[] }>({
		chapters: [],
		chaptersTr: []
	})

	const [isDataLoaded, setIsDataLoaded] = useState(false)

	useEffect(() => {
		const loadData = async () => {
			const text = await fetch('http://192.168.0.189:8080/en.vtt').then(res =>
				res.text()
			)
			const textTr = await fetch('http://192.168.0.189:8080/ru.vtt').then(res =>
				res.text()
			)

			const chapters = parseChapters(text)
			const chaptersTr = parseChapters(textTr)

			loadedDataRef.current = { chapters, chaptersTr }
			setIsDataLoaded(true)
		}
		loadData()

		return () => {
			// cleanup
		}
	}, [])

	const { chapters, chaptersTr } = loadedDataRef.current

	return (
		<IonMenu side='start' contentId='main' type='overlay'>
			<IonHeader>
				<IonToolbar color='primary'>
					<IonTitle>Chapters</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{isDataLoaded && (
					<IonList>
						{chapters.map((chapter, index) => {
							const { title } = chapter
							const { title: titleTr } = chaptersTr[index]
							return (
								<IonItem key={`chapter-${index}`}>
									<IonLabel>
										<h3>{title}</h3>
										<p>{titleTr}</p>
									</IonLabel>
								</IonItem>
							)
						})}
					</IonList>
				)}
			</IonContent>
		</IonMenu>
	)
}

export default SideMenu
