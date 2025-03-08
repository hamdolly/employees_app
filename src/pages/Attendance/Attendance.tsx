import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { playForwardSharp } from 'ionicons/icons'
import { useHistory } from 'react-router'
import { Clipboard } from '@capacitor/clipboard';
import useAPI from '../../Hooks/useAPI'

const Attendance = (props: any) => {

    const [display, setDisplay] = useState("none")
    
    let { shift } = useParams()
    console.log(shift)
    const [result, setResult] = useState<any[]>([])
    var counter = useRef(0)
    // var detalS = []
    const [detalS, setDetalS] = useState([])
    const history = useHistory();
    useEffect(() => { counter.current = result.length }, [result])
    useEffect(() => {
        axios.get(`${useAPI.host}/employees/shift/${props.shift}`).then((res: any) => {
            setResult(res.data)
        })
    }, [])

    const addInfo = (op: any) => {
        detalS.push(op)
        console.log(op)
    }

    const skip = (index: any, detalS: any) => {
        counter.current = counter.current - 1
        const element = document.getElementById(`card${index}`);
        if (element) {
            element.style.backgroundColor = "#f7f9fc";
            setTimeout(() => element.style.display = 'none', 100)
        }
        if (counter.current == 0) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify(
                detalS
            );
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            fetch(`${useAPI.host}/template`, requestOptions)
                .then((response) => response.text())
                .then((res) => {
                    console.log(res)
                    Clipboard.write({ string: res })
                    history.push(`/start`)
                })
                .catch((error) => console.error(error));
        }
    }

    const clicked = (detalS: any, index: Number, name: string, arabicName: string, position: string, gender: string, status: any, color: any) => {
        {
            counter.current = counter.current - 1
            var p = ""
            switch (position) {
                case "Cashiar":
                    p = "cashier"
                    break;
                case "Supervisor":
                    p = "sv"
                    break;
                case "Customer service":
                    p = "cs"
                    break;
            }
            addInfo({
                "name": name,
                "AName": arabicName,
                "position": p,
                "gender": gender,
                "shift": shift,
                "status": status
            })
            const element = document.getElementById(`card${index}`);
            if (element) {
                element.style.backgroundColor = color;
                setTimeout(() => element.style.display = 'none', 100)
            }
            if (counter.current == 0) {
                setTimeout(() => setDisplay("flex"), 500)
            }
        }
    }

    const attendance = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(detalS);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch(`${useAPI.host}/template`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                console.log(res)
                Clipboard.write({ string: res })
                // history.push(`/start`)
            })
            .catch((error) => console.error(error));
            console.log("attn")
    }

    const abcent = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(detalS);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch(`${useAPI.host}/template/arabic`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                console.log(res)
                Clipboard.write({ string: res })
                // history.push(`/start`)
            })
            .catch((error) => console.error(error));
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/start'></IonBackButton>
                    </IonButtons>
                    <IonTitle>Attendance</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding-top ion-d'>
                {
                    result.map((info: any, index: any) =>

                        <IonCard color={"light"} id={`card${index}`} style={{ display: "block" }} key={index}>
                            <IonCardHeader>
                                <IonCardTitle>{info.name}/{info.arabicName}</IonCardTitle>
                                <IonCardSubtitle>{info.position}</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Gender: {info.gender}, .No: {info.e_No}</IonCardContent>
                            <IonItem lines='none'>
                                <IonButton fill='clear' onClick={() => skip(index, detalS)}>
                                    <IonIcon icon={playForwardSharp} size="large" slot="start" color={"primary"} />
                                </IonButton>
                                <IonButton fill="clear" color={"success"} onClick={() => clicked(detalS, index, info.name, info.arabicName, info.position, info.gender, "P", '#42d96b')}>Present</IonButton>
                                <IonButton fill="clear" color={"warning"} onClick={() => clicked(detalS, index, info.name, info.arabicName, info.position, info.gender, "O", '#ffca22')}>Off</IonButton>
                                <IonButton fill="clear" color={"danger"} onClick={() => clicked(detalS, index, info.name, info.arabicName, info.position, info.gender, "A", '#cb1a27')}>Absent</IonButton>
                                <IonButton fill="clear" onClick={() => clicked(detalS, index, info.name, info.arabicName, info.position, info.gender, "V", '#1a65eb')}>Vacation</IonButton>
                            </IonItem>

                        </IonCard>
                    )}
                <div id='container'>
                    <IonButton onClick={() => attendance()} expand='block' size='large' style={{display: display}}>Attendence</IonButton>
                    <IonButton onClick={() => abcent()} expand='block' size='large' style={{display: display}}>Abcent</IonButton>

                </div>
            </IonContent>
        </IonPage>
    )
}

export default Attendance