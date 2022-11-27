import { useState } from "react";

const ValidationForm = () => {

    const [ message, setMessage ] = useState("Print your message here. Click SUBMIT. If validation is ok, you receive your message back with prefix 'echo'");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const submit = () => {
        console.log(message);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                initData: window.Telegram.WebApp.initData,
                message: message })
        };

        const url = window.location.protocol + "//" + window.location.host + "/api/validate";


        fetch(url, requestOptions)
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => setMessage(error));

    }
    
    return(
        <div>
                <textarea 
                rows = "5"  
                name = "description" 
                value={message}
                onChange={handleChange}>
                </textarea>
            <br/>
            <button onClick={submit}>SUBMIT</button>
        </div>
    )
}

export default ValidationForm;