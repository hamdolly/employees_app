import { IonContent, IonIcon, IonItem } from '@ionic/react'
import { trophyOutline } from 'ionicons/icons'
import React from 'react'

const StartContant = () => {
    return (
        <IonContent fullscreen>

            <IonItem button routerLink={`/new-employee`}>
                Add new employee
            </IonItem>

            
            <IonItem button>
                Employees
            </IonItem>

            <IonItem button routerLink={`/select/shift`}>
                Start attendance
            </IonItem>
        </IonContent>
    )
}

export default StartContant