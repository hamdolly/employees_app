import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import useAPI from '../../Hooks/useAPI'
import { useHistory } from "react-router-dom";
import React, { useState } from 'react'

const AddNewEmployee = () => {
    const [ID, setID] = useState(0)
    const [name, setName] = useState("")
    const [aName, setAName] = useState("")
    const [position, setPosition] = useState("")
    const [shift, setShift] = useState(0)
    const [gender, setGender] = useState("")

    const [message, setMessage] = useState("")

    const history = useHistory();

    const addNewEmployee = async (e_No: number, e_name: string, AName: string, position: string, shift: number, gender: string) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "e_No": e_No,
            "e_Name": `${e_name}`,
            "AName": `${AName}`,
            "position": `${position}`,
            "shift": shift,
            "gender": `${gender}`
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${useAPI.host}/employee`, requestOptions)
            .then((response) => response.json())
            .then((result) => result[0].success != 1 ? setMessage(result[0].message) : history.push("/start"))
            .catch((error) => console.error(error));
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add new employee</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true} className="ion-padding">

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Enter employee information</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>

                        <IonList>
                            <IonItem>
                                <IonInput
                                    label="ID:"
                                    type='number'
                                    onIonChange={(e: any) => setID(e.target.value)}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonInput 
                                label="Name:"
                                onIonChange={(e: any) => setName(e.target.value)}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonInput 
                                label="Arabic name:"
                                onIonChange={(e: any) => setAName(e.target.value)}
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonSelect 
                                label='Position' 
                                placeholder='select'
                                onIonChange={(e: any) => setPosition(e.target.value)}
                                >
                                    <IonSelectOption value={"Cashiar"}>Cashiar</IonSelectOption>
                                    <IonSelectOption value={"Customer service"}>Customer service</IonSelectOption>
                                    <IonSelectOption value={"Supervisor"}>Supervisor</IonSelectOption>
                                </IonSelect>
                            </IonItem>

                            <IonItem>
                                <IonSelect 
                                label='Shift' 
                                placeholder='select'
                                onIonChange={(e: any) => setShift(e.target.value)}
                                >
                                    <IonSelectOption value={"1"}>First</IonSelectOption>
                                    <IonSelectOption value={"2"}>Second</IonSelectOption>
                                    <IonSelectOption value={"3"}>Third</IonSelectOption>
                                    <IonSelectOption value={"4"}>Forth</IonSelectOption>
                                    <IonSelectOption value={"5"}>Fifth</IonSelectOption>
                                </IonSelect>
                            </IonItem>

                            <IonItem>
                                <IonSelect 
                                label='Gender' 
                                placeholder='select'
                                onIonChange={(e: any) => setGender(e.target.value)}
                                >
                                    <IonSelectOption value={"M"}>Male</IonSelectOption>
                                    <IonSelectOption value={"F"}>Female</IonSelectOption>
                                </IonSelect>
                            </IonItem>

                            <IonButton 
                            fill='clear'
                            onClick={() => addNewEmployee(ID, name, aName, position, shift, gender)}
                            >Add</IonButton>
                            <IonButton fill='clear' onClick={() => window.location.reload()}>Reset</IonButton>
                            <IonButton fill='clear' routerLink={"/start"}>Cancel</IonButton>

                        </IonList>

                    </IonCardContent>
                </IonCard>
                <div style={{color: "red", margin: "0 0 0 1.5rem", fontSize: "1rem"}}>
                    {message}
                </div>
            </IonContent>
        </IonPage>


    )
}

export default AddNewEmployee