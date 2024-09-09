import React, { useState, useRef, useCallback } from 'react';

//import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import emailjs from 'emailjs-com';

import { emailPattern, serviceId, templateId, publicKey, contactSubText } from '../data/data';

import { Input, Button } from "antd";

type ContactProps = {
    setOpen: Function,
    setPopupMsg: Function,
    setOpenPopup: Function
}

function Contact(props: ContactProps) {
    const { setOpen, setPopupMsg, setOpenPopup } = props;
    const formRef = useRef<HTMLFormElement>(null);

    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleInputChange = (event: any) => {
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
        <div style={{ margin: '1rem', padding: '0 0.5rem' }} className={"text-white m-4 h-screen"}>          
            <h2 className={""}>Contact Me</h2>
            <div className={""}></div> 
            <div className={""}>
                <p>{contactSubText}</p>
            </div>            
            <div style={{paddingTop: '0.5rem'}}>
                {false &&
                    <TextField
                        name='from-name'
                        label="Your Name"
                        required
                        className="text-white"
                        value={fromName}
                        onChange={handleInputChange}
                        InputProps={{
                            className: "",
                        }}
                        InputLabelProps={{
                            className: ""
                        }}
                    />
                }
                {false &&
                    <TextField
                        name='from-email'
                        label="Your Email"
                        required
                        value={fromEmail}
                        className="text-white"
                        onChange={handleInputChange}
                        InputProps={{
                            className: "",
                        }}
                        InputLabelProps={{
                            className: ""
                        }}
                    />
                }
                <div className="w-[50%]">
                    <div className="mt-2">
                        <Input placeholder={"Your Name"} />
                    </div>
                    <div className="mt-4">
                        <Input placeholder={"Your Email"} />
                    </div>
                    <div className="mt-4">
                        <Input
                            placeholder={"Message"}
                            name='message'
                            value={message}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                {false &&
                    <TextField
                        name='message'
                        label="Your Message"
                        required
                        className="text-white"
                        multiline
                        maxRows={4}
                        InputProps={{
                            className: "",
                            style: { height: "5rem" }
                        }}
                        InputLabelProps={{
                            className: ""
                        }}
                        value={message}
                        onChange={handleInputChange}
                    />
                }
            </div>
            <div className={"mt-8"}>
                <Button 
                    onClick={handleButtonSend}
                    className={""}>
                    Send
                </Button>
            </div>
            
            {/* Hidden. Required by emailjs, values are mapped to state. */}
            <form ref={formRef} onSubmit={handleSendEmail} style={{visibility: 'hidden'}}>
                <div><input className="text-white" type='text' name='from_name' onChange={()=>{}} value={fromName}/></div>
                <div><input type='text' name='from_email' onChange={()=>{}} value={fromEmail}/></div>
                <div><input type='text' name='message' onChange={()=>{}} value={message}/></div>
                <div><input id='button_send' type='submit' value='Send'/></div>                                                    
            </form>                
        </div>
    );
}

export default Contact;