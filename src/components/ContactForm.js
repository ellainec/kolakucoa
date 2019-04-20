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
    const [ body, setBody ] = useState("");
    const [ nameError, setNameError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);
    const [ bodyError, setBodyError ] = useState(false);
    const [ hitSend, setHitSent ] = useState(false);

    const handleSend = () => {
        setHitSent(true);
        validateForm();
    }

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

        if (errors.length === 2) {
            return `All fields are required; please fill in missing ${errors.join(" ")} fields`;
        }

        if (errors.length === 3) {
            return `All fields are required; please fill in missing ${errors.join(", ")} fields`;
        }
    }

    const showErrorMsg = () => {
        if (nameError || emailError || bodyError) {
            return <p className="BangersFont">{ createErrorMsg() }</p>
        }
    }

    const showForm = () => {
        if (hitSend && !nameError && !emailError && !bodyError) {
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
            <TextField
                id="outline-multiline-static"
                multiline
                rows="6"
                label="Message"
                margin="normal"
                className="textField max-mobile"
                error={bodyError}
                variant="outlined"
                value={body}
                onChange={(event) => setBody(event.target.value)}
            />
            { showErrorMsg() }
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