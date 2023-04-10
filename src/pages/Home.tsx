import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [name, setName] = useState<string | number>()
  const [gender, setGender] = useState<string | number>()
  function registerClick(){
    alert(`hello ${name}, you are a ${gender}`)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CW Demo</IonTitle>
        </IonToolbar>
        <IonContent>
          <IonList>
            <IonItem>
              <IonInput placeholder="Enter Name" onIonChange={e=> setName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Enter Gender" onIonChange={e=> setGender(e.detail.value!)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={registerClick} expand="block">Register</IonButton>
        </IonContent>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
