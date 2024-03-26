import { IonPage, IonHeader, IonGrid, IonCol, IonRow, IonButton, IonIcon, IonLabel, IonTitle, IonItem, IonContent, IonToolbar, IonList, } from '@ionic/react';
import Toolbar_001 from '../components/Toolbar';
import { tables } from '../models/tableModel';


const TablePage: React.FC = () => {

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
                        {tables.map((Table) => {
                            return ( 
                                <IonItem>
                                    <IonGrid>
                                        <IonRow class="list-header">
                                        <IonCol class="firstCol">
                                            <IonLabel>Table ID</IonLabel>
                                            </IonCol>
                                            <IonCol class="secondCol">
                                            <IonLabel>Organization</IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            <IonLabel>Seat Count</IonLabel>
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                            <IonLabel>Seated</IonLabel>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol class="firstCol">
                                            <IonLabel>{Table.tableid} </IonLabel>
                                            </IonCol>
                                            <IonCol class="secondCol">
                                                <IonLabel>{Table.organization} </IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            <IonLabel>{Table.seatCount} </IonLabel>
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                                <IonLabel>{Table.seats}</IonLabel>
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

export default TablePage;