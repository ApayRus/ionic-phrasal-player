import { IonButton, IonMenuButton, IonIcon } from '@ionic/react'
import {
	playCircle as playIcon,
	pauseCircle as pauseIcon,
	playSkipBackCircle as playPrevIcon,
	playSkipForwardCircle as playNextIcon,
	refreshCircle as repeatOneIcon,
	repeat as repeatAllIcon,
	// settings as settingsIcon,
	menuOutline as menuIcon
} from 'ionicons/icons'
import { PlayerBasicControlsProps } from './types'
import './PlayerPhrasalControls.css'

const PlayerPhrasalControls: React.FC<PlayerBasicControlsProps> = props => {
	const { playerHandlers, playerState } = props
	const { isPlaying } = playerState
	return (
		<div className='playerPhrasalControlsContainer'>
			<IonMenuButton style={{ flex: 1 }}>
				<IonIcon icon={menuIcon} />
			</IonMenuButton>
			<div style={{ visibility: 'hidden' }}>
				<IonButton fill='clear' style={{ flex: 1 }} onClick={() => {}}>
					<IonIcon icon={repeatAllIcon} />
				</IonButton>
			</div>
			{isPlaying ? (
				<IonButton fill='clear' onClick={() => playerHandlers.pause()}>
					<IonIcon icon={pauseIcon} />
				</IonButton>
			) : (
				<IonButton fill='clear' onClick={() => playerHandlers.play()}>
					<IonIcon icon={playIcon} />
				</IonButton>
			)}
			<IonButton
				fill='clear'
				style={{ flex: 1 }}
				onClick={() => {
					playerHandlers.playPrevPhrase()
				}}
			>
				<IonIcon icon={playPrevIcon} />
			</IonButton>
			<IonButton
				fill='clear'
				style={{ flex: 1 }}
				onClick={() => {
					playerHandlers.playCurrentPhrase()
				}}
			>
				<IonIcon icon={repeatOneIcon} />
			</IonButton>
			<IonButton
				fill='clear'
				style={{ flex: 1 }}
				onClick={() => {
					playerHandlers.playNextPhrase()
				}}
			>
				<IonIcon icon={playNextIcon} />
			</IonButton>
		</div>
	)
}

export default PlayerPhrasalControls
