import { IonRange, IonIcon, IonButton } from '@ionic/react'
import {
	playOutline as playIcon,
	pauseOutline as pauseIcon,
	playForwardOutline as playForwardIcon,
	playBackOutline as playBackIcon,
	chevronDownOutline as chevronDownIcon,
	chevronUpOutline as chevronUpIcon
} from 'ionicons/icons/'
import { PlayerBasicControlsProps } from './types'
import { formatSecondsToTime } from 'frazy-parser'
import './PlayerBasicControls.css'

const PlayerControls: React.FC<PlayerBasicControlsProps> = props => {
	const { playerHandlers, playerState } = props

	const { currentTime, isPlaying, playbackRate, start, end } = playerState

	const currentTimeFormatted = formatSecondsToTime(currentTime)
	const endFormatted = formatSecondsToTime(end)

	const handleSeek = (e: CustomEvent): void => {
		const newTime = e.detail.value
		if (Math.abs(newTime - playerState.currentTime)) {
			playerHandlers.seek(newTime)
		}
	}

	return (
		<div className='root'>
			<IonRange
				min={start}
				max={end}
				value={currentTime}
				onIonChange={handleSeek}
			/>
			<div className='controlsContainer'>
				<div className='leftBlock'>
					<span className='smallText'>
						{currentTimeFormatted} / {endFormatted}
					</span>
				</div>
				<div className='centerBlock'>
					<IonButton
						fill='clear'
						size='small'
						onClick={() => playerHandlers.playMinus10()}
					>
						<IonIcon icon={playBackIcon} />
					</IonButton>
					{isPlaying ? (
						<IonButton
							fill='clear'
							size='small'
							onClick={() => playerHandlers.pause()}
						>
							<IonIcon icon={pauseIcon} />
						</IonButton>
					) : (
						<IonButton
							fill='clear'
							size='small'
							onClick={() => playerHandlers.play()}
						>
							<IonIcon icon={playIcon} />
						</IonButton>
					)}

					<IonButton
						fill='clear'
						size='small'
						onClick={() => playerHandlers.playPlus10()}
					>
						<IonIcon icon={playForwardIcon} />
					</IonButton>
				</div>
				<div className='rightBlock'>
					<IonButton
						fill='clear'
						size='small'
						onClick={() => playerHandlers.changeRate()}
						className='playbackRateButton'
					>
						<span className='smallText'>x{playbackRate}</span>
					</IonButton>
					<IonButton
						fill='clear'
						size='small'
						onClick={() => playerHandlers.toggleVideo()}
						className='chevronButton'
					>
						<IonIcon
							icon={playerState.hideVideo ? chevronDownIcon : chevronUpIcon}
						/>
					</IonButton>
				</div>
			</div>
		</div>
	)
}

export default PlayerControls
