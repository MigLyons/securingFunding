import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useHistory } from 'react-router';
  

interface ItemData {
    name: string;
    value: number;
    winningbid: number;
    description: string;

}

const [items, setItems] = useState([]);

const getItems = async () => {
    await getDocs(collection(db, "items"))
      .then((querySnapshot)=>{
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
        setItems(newData);
      })
}

useEffect(()=>{
  getItems();
}, [])



const ItemCard: React.FC = ({ }) => {
  return (

        return (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
  
            <IonCardContent>Heres a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  
            <IonButton fill="clear">Action 1</IonButton>
            <IonButton fill="clear">Action 2</IonButton>
      </IonCard>
        )

        
      })}
  );
};
export default ItemCard;

