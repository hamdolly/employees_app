import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useParams } from "react-router"
import useAPI from "../../Hooks/useAPI"

const Template = (props: any) => {
    let { data } = useParams()
    const [result, setResult] = useState("")
    const [text, setText] = useState("")

    const history = useHistory()
    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify([
            // props.data
            data
        ]);
        console.log(data)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${useAPI.host}/template`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                setText(res)
                setResult(res)
            })
            .catch((error) => console.error(error));

    }, [])


    const handleCopy = async () => {
        try {

            await window.navigator.clipboard.readText(() => text);
            alert("Template has copied");
            // history.push("/start")
        } catch (err) {
            console.error(
                "Unable to copy to template.",
                err
            );
            alert("Copy failed.");
        }
    };

    useEffect(() => { handleCopy() }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Final Attendance</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div>
                    {result}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Template