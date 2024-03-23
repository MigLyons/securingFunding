import firebase from 'firebase/compat/app';
import { app, auth } from "../firebaseConfig";
import {IonPage, IonTitle, IonHeader, IonButton, IonToolbar, IonButtons, IonMenuButton, IonContent} from "@ionic/react";
import { useState, useEffect } from "react";
import 'firebase/compat/auth';
//import { useNavigate } from "react-router-dom";
import * as firebaseui from 'firebaseui';

const Login: React.FC = () => {

//***********************************************
  useEffect(() => {
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

      ui.start('#firebaseui-auth-container', {
          callbacks: {
              signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                  document.getElementById('congrats')!.style.display = 'block';
                  return authResult;
              },
              uiShown: function() {
                  // This is what should happen when the form is full loaded. In this example, I hide the loader element.
                  document.getElementById('loader')!.style.display = 'none';
              }
          },
          signInSuccessUrl: 'https://www.anyurl.com', // This is where should redirect if the sign in is successful.
          signInOptions: [ // This array contains all the ways an user can authenticate in your application. For this example, is only by email.
              {
                  provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                  requireDisplayName: true,
                  disableSignUp: {
                      status: true
                  }
              }
          ],
      });
  }, []);

//************************************************

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>Login</IonButton>
          </IonButtons>
          <IonTitle>Please Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LOGIN</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="firebaseui-auth-container"></IonContent>
        <IonContent id="loader" className="text-center">Loading...</IonContent>
        <IonContent id='congrats'>authenticated</IonContent>
    </IonContent>
    </IonPage>
  );
};

export default Login;