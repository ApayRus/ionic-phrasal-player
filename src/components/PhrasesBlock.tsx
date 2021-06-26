import { PhrasesBlockProps } from './types'
import './PhrasesBlock.css'

const PhrasesBlock: React.FC<PhrasesBlockProps> = props => {
	const { phrases, phraseRefs, playerState } = props
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
					>
						<div className={isActive ? 'phraseBlock active' : 'phraseBlock'}>
							{index + '. ' + elem.text}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default PhrasesBlock
