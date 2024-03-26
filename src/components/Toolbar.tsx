import {
    IonToolbar,
    IonHeader,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonButton,
} from '@ionic/react';
import firebase from 'firebase/compat/app';


const Toolbar_001: React.FC = () => {
    return (
        <IonToolbar >
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons> 
                <IonButtons slot="primary">
                    <IonButton onClick={() => firebase.auth().signOut()}>Logout</IonButton>
                </IonButtons>
        </IonToolbar>
    );
};

export default Toolbar_001;