import { IonPage, IonHeader, IonGrid, IonCol, IonRow, IonButton, IonIcon, IonLabel, IonTitle, IonItem, IonContent, IonToolbar, IonList, } from '@ionic/react';
//import { collection, query, where, getDocs } from "firebase/firestore";
//import { db } from "../firebaseConfig";
//import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';
//import AttendeeItem from "../components/AttendeeItem";
//import attendees from '../models/Attendee';
import { attendees,  Attendee } from "../models/attendeeModel";
import Toolbar_001 from '../components/Toolbar';
import { checkbox, checkmarkCircle, closeCircle, pin } from 'ionicons/icons';

//Don't worry about this part - I don't know what I'm doing.
/*const [attendees, setAttendees] = useState([]);

const q = query(collection(db, "Attendees"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    var attendeeData = doc.data()
    var address
    var city
    var state
    var street
    var zipcode
    var organization
    var paid
    var table
    var name
    var plusOne
    var wins

})

//const attendeeData = querySnapshot.docs

setAttendees(attendeeData);  
*/

const AttendeePage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <Toolbar_001 />
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Attendees</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList lines="full" inset={true}>
                        {attendees.map((Attendee) => {
                            return ( 
                                <IonItem>
                                    <IonGrid>
                                        <IonRow class="list-header">
                                        <IonCol class="firstCol">
                                            <IonLabel>Payment status</IonLabel>
                                            </IonCol>
                                            <IonCol class="secondCol">
                                            <IonLabel>Name</IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            <IonLabel>Plus one</IonLabel>
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                            <IonLabel>Address</IonLabel>
                                            </IonCol>
                                            <IonCol class="fifthCol">
                                            <IonLabel>Organization</IonLabel>
                                            </IonCol>
                                            <IonCol class="sixthCol">
                                            <IonLabel>Table</IonLabel>
                                            </IonCol>
                                            <IonCol class="seventhCol">
                                            <IonLabel>Items won</IonLabel>
                                            </IonCol>
                                            <IonCol class="eighthCol">
                                                <IonLabel>Bid Number</IonLabel>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol class="firstCol">
                                                {Attendee.paid ? (
                                                    <IonIcon icon={checkbox} size="large"></IonIcon>
                                                ) : (
                                                    <IonIcon icon={closeCircle} size="large"></IonIcon>
                                                )}        
                                            </IonCol>
                                            <IonCol class="secondCol">
                                                <IonLabel>{Attendee.name} </IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            {Attendee.plusOne ? (
                                                    <IonIcon icon={checkbox} size="large"></IonIcon>
                                                ) : (
                                                    <IonIcon icon={closeCircle} size="large"></IonIcon>
                                                )}        
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                                <IonLabel>{Attendee.street}, {Attendee.city}, {Attendee.state}, {Attendee.zipcode}</IonLabel>
                                            </IonCol>
                                            <IonCol class="fifthCol">
                                                <IonLabel>{Attendee.organization}</IonLabel>
                                            </IonCol>
                                            <IonCol class="sixthCol">
                                                <IonButton>
                                                    <IonLabel>Table {Attendee.table}</IonLabel>
                                                </IonButton>
                                            </IonCol>
                                            <IonCol class="seventhCol">
                                                <IonLabel>{Attendee.wins}</IonLabel>
                                            </IonCol>
                                            <IonCol class="eighthCol">
                                                <IonLabel>{Attendee.bidNumber}</IonLabel>
                                            </IonCol>


                                        </IonRow>

                                    </IonGrid>

                                    
                                    
                                </IonItem>
                            );
                        })}
                    </IonList>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default AttendeePage;