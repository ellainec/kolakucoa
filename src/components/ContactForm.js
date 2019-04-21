import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import youTubeLogo from '../images/youTube.png';
import instagramLogo from '../images/instagram_icon.jpg';
import facebookLogo from '../images/facebook.png';
import paperPlane from '../images/paper-plane.png';

const ContactForm = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ nameError, setNameError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);
    const [ messageError, setMessageError ] = useState(false);
    const [ sent, setSent ] = useState(false);

    const handleSend = () => {
        if (name && validEmail(email) && message) {
            sendEmail();
            setSent(true);
        }
        setErrorMessages();
    }

    const sendEmail = () => {
        const url = "https://sltmrsoftf.execute-api.us-west-2.amazonaws.com/cors-enabled/kolakucoa";
        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                name,
                email,
                message
            }
        })
    }

    const setErrorMessages = () => {
        setNameError( !name ? true : false );
        setEmailError( !validEmail(email) ? true: false );
        setMessageError( !message ? true: false );
    }

    const validEmail = (email) => {
        const valid = !!email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
        return valid;
    }

    const showForm = () => {
        if (sent) {
            return (
                <div>
                    <img className="PaperPlane" src={ paperPlane } alt="paper plane" />
                    <p className="BangersFont">Message Sent</p>
                </div>
            )
        }
        return (
            <React.Fragment>
            <TextField
                id="standardd-with-placeholder"
                label="Name"
                placeholder="Name"
                margin="normal"
                className="textField max-mobile"
                error = {nameError}
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />
            { nameError && <span className="errorText">Name is missing</span>}
            <TextField
                id="standardd-with-placeholder"
                label="Email"
                placeholder="Email"
                margin="normal"
                className="textField max-mobile"
                error={emailError}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            { emailError && <span  className="errorText">Email address is missing or invalid</span>}
            <TextField
                id="outline-multiline-static"
                multiline
                rows="6"
                label="Message"
                margin="normal"
                className="textField max-mobile"
                error={messageError}
                variant="outlined"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            { messageError && <span className="errorText">Message is missing</span>}
            <Button className="sendButton" variant="outlined" color="primary" onClick={()=>handleSend()}>
                    Send
            </Button>
            </React.Fragment>
        )
    }

    return(
        <div className="ContactDiv">
            <div className="social">
                <img src={instagramLogo} alt="gmail logo"/>
                <img src={youTubeLogo} alt="youtoub logo"/>
                <img src={facebookLogo} alt="facebook logo"/>
            </div>
            <p className="ContactFormText max-mobile">We'd love to hear from you! Send us a Message
                with the form below or email us at kolakucoa@gmail.com
            </p>
            { showForm() }
        </div>
    )
}

export default ContactForm;