import { IonButton, IonButtons, IonIcon } from '@ionic/react';
import './ExploreContainer.css';
import { logoIonic, caretForward } from 'ionicons/icons';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id='container'>
        <IonButton routerLink={"/start"} size='large'>
          START
        <IonIcon slot="end" icon={caretForward}></IonIcon>
        </IonButton>
        
    </div>
  );
};

export default ExploreContainer;
