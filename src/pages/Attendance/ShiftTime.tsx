import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useHistory, useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { terminalOutline } from 'ionicons/icons'

const ShiftTime = () => {
    const [button, setButton] = useState<any>()
    const [cards, setCards] = useState<any>()
    let { time } = useParams()
    let t: number | string = terminalOutline

    let history = useHistory()

    const clicked = (shift: any) => {
        // setCards(<Attendance shift={3} />)
        switch (shift) {
            case 1:
                history.push(`/attendance1/${1}`)
                break;
            case 2:
                history.push(`/attendance1/${2}`)
                break;

            case 3:
                history.push(`/attendance2/${3}`)
                break;

            case 4:
                history.push(`/attendance3/${4}`)
                break;
            case 5:
                history.push(`/attendance3/${5}`)
                break;
        }

    }

    const change = async (shift: any) => {
        // switch (await shift) {
        //     case 1:
        //         history.push(`/attendance1/${1}`)
        //         break;

        //     case 2:
        //         history.push(`/attendance2/${2}`)
        //         break;

        //     case 3:
        //         history.push(`/attendance3/${3}`)
        //         break;

        //     case 4:
        //         history.push(`/attendance4/${4}`)
        //         break;
        //     case 5:
        //         history.push(`/attendance5/${5}`)
        //         break;
        // }
        history.push(`/attendance${shift}/${shift}`)
    }

    

    useEffect(() => { change(time); console.log("It is work: " + time)}, [])

    // var first = [<IonButton key={1} onClick={() => { clicked(1) }} size="large" expand="block">8:45 - 5:45</IonButton>,
    // <IonButton key={2} onClick={() => { clicked(2) }} size="large" expand="block">9:45 - 6:45</IonButton>]

    // var second = [<IonButton key={3} onClick={() => { clicked(3) }} size="large" expand="block">2:00 - 11:00</IonButton>]

    // var third = [<IonButton key={4} onClick={() => { clicked(4) }} size="large" expand="block">3:30 - 12:30</IonButton>,
    // <IonButton key={5} onClick={() => { clicked(5) }} size="large" expand="block">4:30 - 1:30</IonButton>]
    var start = [<IonButton key={time} onClick={() => { clicked(time) }} size="large" expand="block">START</IonButton>]

    const times = () => {
        // switch (time) {
        //     case "1":
        //         setButton(first)
        //         break;

        //     case "2":
        //         setButton(second)
        //         break;

        //     case "3":
        //         setButton(third)
        //         break;
        // }
        setButton(start)
    }
    useEffect(() => { times() }, [])
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
                {/* {button}
                {cards} */}

            </IonContent>
        </IonPage>
    )
}

export default ShiftTime