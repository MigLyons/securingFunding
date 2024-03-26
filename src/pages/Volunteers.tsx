import { IonPage, IonHeader, IonGrid, IonCol, IonRow, IonButton, IonIcon, IonLabel, IonTitle, IonItem, IonContent, IonToolbar, IonList, } from '@ionic/react';
import Toolbar_001 from '../components/Toolbar';
import { volunteers } from '../models/volunteerModel';



const VolunteerPage: React.FC = () => {

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
                        {volunteers.map((Volunteer) => {
                            return ( 
                                <IonItem>
                                    <IonGrid>
                                        <IonRow class="list-header">
                                        <IonCol class="firstCol">
                                            <IonLabel>Name</IonLabel>
                                            </IonCol>
                                            <IonCol class="secondCol">
                                            <IonLabel>Availability</IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            <IonLabel>Phone Number</IonLabel>
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                            <IonLabel>Position</IonLabel>
                                            </IonCol>
                                            <IonCol class="fifthCol">
                                            <IonLabel>bidNumber</IonLabel>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol class="firstCol">
                                            <IonLabel>{Volunteer.name} </IonLabel>
                                            </IonCol>
                                            <IonCol class="secondCol">
                                                <IonLabel>{Volunteer.availability} </IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            <IonLabel>{Volunteer.phone} </IonLabel>
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                            <IonLabel>{Volunteer.position} </IonLabel>
                                            </IonCol>
                                            <IonCol class="fifthCol">
                                            <IonLabel>{Volunteer.bidNumber} </IonLabel>
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

export default VolunteerPage;