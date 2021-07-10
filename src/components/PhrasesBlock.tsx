import { PhrasesBlockProps } from './types'
import './PhrasesBlock.css'
import { playOutline as playIcon } from 'ionicons/icons/'
import { IonIcon, IonButton } from '@ionic/react'

const PhrasesBlock: React.FC<PhrasesBlockProps> = props => {
	const { phrases, phrasesTr, phraseRefs, playerState, playerHandlers } = props
	const { currentPhraseNum } = playerState

	return (
		<div>
			{phrases.map((elem, index) => {
				const { text, id } = elem
				const isActive = +id === currentPhraseNum
				const { text: textTr } = phrasesTr?.find(elem => elem.id === id) || {}
				return (
					<div
						className='phraseWrapper'
						key={`phrase-${index}`}
						ref={el => {
							phraseRefs.current[index] = el!
						}}
					>
						<div className={isActive ? 'phraseBlock active' : 'phraseBlock'}>
							<div className='text'>{text}</div>
							<div className='textTr'>{textTr}</div>
							<div className='phraseNum'>
								<IonButton
									fill='clear'
									size='small'
									onClick={() => playerHandlers.playPhrase(+id)}
								>
									<IonIcon icon={playIcon} />
									{id}
								</IonButton>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default PhrasesBlock
