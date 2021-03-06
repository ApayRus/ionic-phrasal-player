import { Redirect, Route } from 'react-router-dom'
import {
	IonApp,
	IonRouterOutlet,
	IonRouterLink,
	IonSplitPane
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import SideMenu from './components/SideMenuLeft'
import SideMenuRight from './components/SideMenuRight'
import Filesystem from './pages/Filesystem'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonSplitPane contentId='main' when='md'>
				<SideMenu />
				<IonRouterOutlet id='main'>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/filesystem'>
						<Filesystem />
					</Route>
				</IonRouterOutlet>
				<SideMenuRight />
			</IonSplitPane>
		</IonReactRouter>
	</IonApp>
)

export default App
