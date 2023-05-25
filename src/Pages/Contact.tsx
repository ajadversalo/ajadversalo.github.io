import React, { useState, useRef, useCallback } from 'react';

import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import emailjs from 'emailjs-com';

import { emailPattern, serviceId, templateId, publicKey, contactSubText } from '../data/data';

const useStyles = makeStyles()(() => ({
    root: {
        width: '100%',
        padding: '0 2rem 1rem 1rem',
    }, 
    button :{
        marginTop: '1rem',
        padding: '0.5rem 1rem', 
        color: '#587792', 
        border: '2px solid #587792',
        borderRadius: 0,
        fontFamily: 'Wix MadeFor Display',
        backgroundColor: '#EEF0EB',
        '&:hover': {
            backgroundColor: '#FFF'
        },
    },
    buttonSendRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end'
    },
    contactInfoItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#587792'
    },
    contactInfoItemValue: {
        textAlign: 'left',
        width: '100%',
        paddingLeft: '1rem'
    },
    contentText: {
        color: '#587792'
    },
    input :{
        borderRadius: 0,
        fontFamily: 'Wix MadeFor Display',
    },
    inputLabel: {
        fontFamily: 'Wix MadeFor Display',
    },
    textBox: {
        width: '100%',
        margin: '0.5rem 0',
        backgroundColor: '#EEF0EB',
        borderRadius: 0
    },           
    title:{
        color: '#587792'
    },
    subText: {
        color: 'rgba(0, 0, 0, 0.6)'
    }
}));

type ContactProps = {
    setOpen: Function,
    setPopupMsg: Function,
    setOpenPopup: Function
}

function Contact(props: ContactProps) {
    const { setOpen, setPopupMsg, setOpenPopup } = props;
    const { classes } = useStyles();
    const formRef = useRef<HTMLFormElement>(null);

    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(event){
            switch(event.target?.name){                    
                case 'from-name':
                    setFromName(event.target.value);
                    break;
                case 'from-email':
                    setFromEmail(event.target.value);
                    break;
                case 'message':
                    setMessage(event.target.value);
                    break;
                default:
                    break;
            }
        }            
    }

    const handleButtonSend = useCallback(() => {
        
        let popupMsgType = '';
        let popupMsg = '';
        
        if(!fromName || !fromEmail || !message){            
            popupMsgType = 'error';
            popupMsg = 'Unable to send. Some fields are empty.';
        }
        
        if(fromName && fromEmail && message && !emailPattern.test(fromEmail)){            
            popupMsgType = 'error';
            popupMsg = 'Unable to send. Email address is invalid.';
        }

        if(popupMsgType && popupMsg){
            setPopupMsg(popupMsg);
            setOpenPopup(true);
        }

        if(fromName && fromEmail && message && emailPattern.test(fromEmail)){            
            let buttonSend = document.getElementById('button_send');
            if(buttonSend){
                buttonSend.click();
            }
        }
                
    }, [fromName, fromEmail, message, setPopupMsg, setOpenPopup]);

    const handleSendEmail = (event: React.FormEvent) => {
        if(event){            
            event.preventDefault();
            emailjs.sendForm(serviceId, templateId, (formRef?.current) ? formRef?.current : '', publicKey)
            .then((result: any) => {                
                if(result.text){
                    setPopupMsg('Message successfully sent!');
                    setOpenPopup(true);
                    setOpen(false);
                }
            }, (error: any) => {
                console.log(error.text);
                setPopupMsg(error.text);
                setOpenPopup(true);
            });
        }
    }

    return(
        <div style={{margin: '1rem', padding: '0 0.5rem'}}>          
            <h2 className={classes.title}>Contact Me</h2>
            <div className={classes.subText}>
                <p>{contactSubText}</p>
            </div>            
            <div style={{paddingTop: '0.5rem'}}>
                <TextField
                    name='from-name'
                    label="Your Name" 
                    required
                    className={classes.textBox}
                    value={fromName}
                    onChange={handleInputChange}
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.inputLabel
                    }}
                />
                <TextField
                    name='from-email'
                    label="Your Email" 
                    required
                    value={fromEmail} 
                    className={classes.textBox}
                    onChange={handleInputChange}
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.inputLabel
                    }}
                />
                <TextField
                    name='message' 
                    label="Your Message" 
                    required 
                    className={classes.textBox}
                    multiline
                    maxRows={4}
                    InputProps={{
                        className: classes.input,
                        style: { height: "5rem" }
                    }}
                    InputLabelProps={{
                        className: classes.inputLabel
                    }}
                    value={message}
                    onChange={handleInputChange}
                />
            </div>
            <div className={classes.buttonSendRoot}>
                <Button 
                    onClick={handleButtonSend}
                    className={classes.button}>
                    Send
                </Button>
            </div>
            
            {/* Hidden. Required by emailjs, values are mapped to state. */}
            <form ref={formRef} onSubmit={handleSendEmail} style={{visibility: 'hidden'}}>
                <div><input type='text' name='from_name' onChange={()=>{}} value={fromName}/></div>
                <div><input type='text' name='from_email' onChange={()=>{}} value={fromEmail}/></div>
                <div><input type='text' name='message' onChange={()=>{}} value={message}/></div>
                <div><input id='button_send' type='submit' value='Send'/></div>                                                    
            </form>                
        </div>
    );
}

export default Contact;
