import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const SelectShift = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Select shift</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding-top">
                {/* <IonButton size="large" expand="block" routerLink={`/select/shift/time/1`}>First</IonButton>
                <IonButton size="large" expand="block" routerLink={`/select/shift/time/2`}>Second</IonButton>
                <IonButton size="large" expand="block" routerLink={`/select/shift/time/3`}>Third</IonButton> */}
                <IonButton size="large" expand="block" routerLink={`/select/shift/time/1`}>First</IonButton>
                <IonButton size="large" expand="block" routerLink={`/select/shift/time/2`}>Second</IonButton>
                <IonButton size="large" expand="block" routerLink={`/select/shift/time/3`}>Third</IonButton>
                <IonButton size="large" expand="block" routerLink={`/select/shift/time/4`}>4th</IonButton>
                <IonButton size="large" expand="block" routerLink={`/select/shift/time/5`}>5th</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default SelectShift