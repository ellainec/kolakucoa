import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import youTubeLogo from '../images/youTube.png';
import instagramLogo from '../images/instagram_icon.jpg';
import facebookLogo from '../images/facebook.png';

const ContactForm = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ body, setBody ] = useState("");
    const [ nameError, setNameError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);
    const [ bodyError, setBodyError ] = useState(false)

    const validateForm = () => {
        setNameError( !name ? true : false );
        setEmailError( !email ? true: false );
        setBodyError( !body ? true: false );
    }

    const createErrorMsg = () => {
        let errors = []; 
        if (nameError) {
            errors.push("name");
        }
        if (emailError) {
            errors.push("email");
        }
        if (bodyError) {
            errors.push("message");
        }
        if (errors.length > 1) {
            const lastIndex = errors[errors.length-1];
            errors[errors.length-1] = `and ${lastIndex}`;
        }
        return `All fields are required; please fill in missing ${errors.join(", ")} field${errors.length > 1 ? "s" : ""}.`;
    }

    const showErrorMsg = () => {
        if (nameError || emailError || bodyError) {
            return <p>{ createErrorMsg() }</p>
        }
    }

    return(
        <div className="ContactDiv">
            <div className="social">
                <img src={instagramLogo} alt="gmail logo"/>
                <img src={youTubeLogo} alt="youtoub logo"/>
                <img src={facebookLogo} alt="facebook logo"/>
            </div>
            <p className="ContactFormText">We'd love to hear from you! Send us a Message
                with the form below or email us at kolakucoa@gmail.com
            </p>
            <TextField
                id="standardd-with-placeholder"
                label="Name"
                placeholder="Placeholder"
                margin="normal"
                className="textField"
                error = {nameError}
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />
            <TextField
                id="standardd-with-placeholder"
                label="Email"
                placeholder="Placeholder"
                margin="normal"
                className="textField"
                error={emailError}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
                id="outline-multiline-static"
                multiline
                rows="6"
                label="Message"
                margin="normal"
                className="textField"
                error={bodyError}
                variant="outlined"
                value={body}
                onChange={(event) => setBody(event.target.value)}
            />
            { showErrorMsg() }
            <Button className="sendButton" variant="outlined" color="primary" onClick={()=>validateForm()}>
                    Send
            </Button>
        </div>
    )
}

export default ContactForm;