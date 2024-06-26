import { IonApp, IonHeader, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Login from './pages/Login';
import Attendees from './pages/Attendees';
import Tables from './pages/Tables';
import Volunteers from './pages/Volunteers';
import Items from './pages/Items';





/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Toolbar_001 from './components/Toolbar';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';

setupIonicReact();


const App: React.FC = () => {

  /*const[user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(firebase.auth(), (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid });
      }else{
        setUser({});
      }
    });
  });*/


  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
        </IonHeader>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" component={Login} exact={true} />
            <Route path="/authenticated" component={Page} exact={true}/>
            <Route path="/authenticated/attendees" component={Attendees} />
            <Route path="/authenticated/items" component={Items} />
            <Route path="/authenticated/volunteers" component={Volunteers} />
            <Route path="/authenticated/tables" component={Tables} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
