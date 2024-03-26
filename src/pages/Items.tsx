import { IonPage, IonHeader, IonGrid, IonCol, IonRow, IonButton, IonIcon, IonLabel, IonTitle, IonItem, IonContent, IonToolbar, IonList, } from '@ionic/react';
import Toolbar_001 from '../components/Toolbar';
import { items, Item } from "../models/itemModel";


const ItemPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <Toolbar_001 />
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList lines="full" inset={true}>
                        {items.map((Item) => {
                            return ( 
                                <IonItem>
                                    <IonGrid>
                                        <IonRow class="list-header">
                                        <IonCol class="firstCol">
                                            <IonLabel>Name</IonLabel>
                                            </IonCol>
                                            <IonCol class="secondCol">
                                            <IonLabel>Description</IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            <IonLabel>Winning Bid number</IonLabel>
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                            <IonLabel>Value</IonLabel>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol class="firstCol">
                                            <IonLabel>{Item.name} </IonLabel>
                                            </IonCol>
                                            <IonCol class="secondCol">
                                                <IonLabel>{Item.description} </IonLabel>
                                            </IonCol>
                                            <IonCol class="thirdCol">
                                            <IonButton href="#">
                                                    <IonLabel>Winner: {Item.winningBid}</IonLabel>
                                                </IonButton>
                                            </IonCol>
                                            <IonCol class="fourthCol">
                                                <IonLabel>${Item.value}</IonLabel>
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

export default ItemPage;