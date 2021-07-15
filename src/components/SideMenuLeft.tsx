import { useEffect, useState } from 'react'
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
import './SideMenu.css'
import appState from '../store/appState'
import { observer } from 'mobx-react'

const SideMenu: React.FC = () => {
	const [isDataLoaded, setIsDataLoaded] = useState(false)

	useEffect(() => {
		const loadData = async () => {
			const text = await fetch('http://192.168.0.189:8080/en.vtt').then(res =>
				res.text()
			)
			const textTr = await fetch('http://192.168.0.189:8080/ru.vtt').then(res =>
				res.text()
			)

			const chapters = parseChapters(text).map((elem, index, array) => {
				const end = elem?.end || array[index + 1]?.start
				return { ...elem, end }
			})

			const chaptersTr = parseChapters(textTr)

			appState.setChapters(chapters)
			appState.setChaptersTr(chaptersTr)

			setIsDataLoaded(true)
		}
		loadData()

		return () => {
			// cleanup
		}
	}, [])

	/* 
	useEffect(() => {
		if (!playOnePhrase) {
			const currentChapter = chapters[currentChapterNum]
			const { start = 0, end = 0 } = currentChapter || {}
			setPlayerState(prevState => ({
				...prevState,
				start,
				end
			}))
			seek(start)
			return () => {
				//	cleanup
			}
		}
	}, [currentChapterNum])


	const syncCurrentChapterNum = (time: number) => {
		const currentChapterNum = findCurrentPhraseNum(chapters, time)
		console.log('currentChapterNum', currentChapterNum)
		appState.setCurrentChapterNum(currentChapterNum)
	} 
	*/

	const { chapters, chaptersTr, currentChapterNum } = appState

	return (
		<IonMenu side='start' contentId='main' type='overlay'>
			<IonContent>
				<h3 className='sideMenuHeader'>Chapters</h3>
				{isDataLoaded && (
					<IonList>
						{chapters.map((chapter, index) => {
							const { title } = chapter
							const { title: titleTr } = chaptersTr[index]
							return (
								<IonItem
									key={`chapter-${index}`}
									onClick={() => appState.setCurrentChapterNum(index)}
									className={index === currentChapterNum ? 'active' : ''}
								>
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

export default observer(SideMenu)
