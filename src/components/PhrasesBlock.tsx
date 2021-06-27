import { PhrasesBlockProps } from './types'
import './PhrasesBlock.css'

const PhrasesBlock: React.FC<PhrasesBlockProps> = props => {
	const { phrases, phraseRefs, playerState, playerHandlers } = props
	const { currentPhraseNum } = playerState

	return (
		<div>
			{phrases.map((elem, index) => {
				const isActive = index === currentPhraseNum
				return (
					<div
						className='phraseWrapper'
						key={`phrase-${index}`}
						ref={el => {
							phraseRefs.current[index] = el!
						}}
						onClick={() => playerHandlers.playPhrase(index)}
					>
						<div className={isActive ? 'phraseBlock active' : 'phraseBlock'}>
							<div className='phraseText'>{index + '. ' + elem.text}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default PhrasesBlock
