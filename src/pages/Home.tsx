import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import MediaPlayer from '../components/MediaPlayer'
import './Home.css'

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div
					style={{
						textAlign: 'center',
						width: 320,
						borderColor: 'red',
						borderWidth: 2,
						borderStyle: 'solid'
					}}
				>
					<MediaPlayer src='http://192.168.0.189:8080/moana320x135.mp4' />
				</div>
			</IonContent>
		</IonPage>
	)
}

export default Home
