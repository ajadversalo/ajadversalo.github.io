import React, { useState, useRef, useCallback } from 'react';
import PageContainer from '../Pages/PageContainer';

import emailjs from 'emailjs-com';

import { emailPattern, serviceId, templateId, publicKey, contactSubText } from '../data/data';

import { Input, Button } from "antd";
const { TextArea } = Input;

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
        if (event) {
            switch (event.target?.name) {
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

        if (!fromName || !fromEmail || !message) {
            popupMsgType = 'error';
            popupMsg = 'Unable to send. Some fields are empty.';
        }

        if (fromName && fromEmail && message && !emailPattern.test(fromEmail)) {
            popupMsgType = 'error';
            popupMsg = 'Unable to send. Email address is invalid.';
        }

        if (popupMsgType && popupMsg) {
            setPopupMsg(popupMsg);
            setOpenPopup(true);
        }

        if (fromName && fromEmail && message && emailPattern.test(fromEmail)) {
            let buttonSend = document.getElementById('button_send');
            if (buttonSend) {
                buttonSend.click();
            }
        }

    }, [fromName, fromEmail, message, setPopupMsg, setOpenPopup]);

    const handleSendEmail = (event: React.FormEvent) => {
        if (event) {
            event.preventDefault();
            emailjs.sendForm(serviceId, templateId, (formRef?.current) ? formRef?.current : '', publicKey)
                .then((result: any) => {
                    if (result.text) {
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

    return (
        <PageContainer title="Contact" fillScreen={true} className="w-full">
            <div className="">
                {contactSubText}
            </div>
            <div className="w-100 mt-16">
                <div className={`mt-2 flex flex-col lg:flex-row`}>
                    <div className="lg:w-[20%] mb-2 lg:mb-0">Your Name</div>
                    <Input placeholder={""} />
                </div>
                <div className="mt-4 flex  flex-col lg:flex-row">
                    <div className="lg:w-[20%] mb-2 lg:mb-0">Your Email</div>
                    <Input placeholder={""} />
                </div>
                <div className="mt-4 flex  flex-col lg:flex-row">
                    <div className={`lg:w-[20%] mb-2 lg:mb-0`}>Message</div>
                    <TextArea
                        rows={3}
                        placeholder={""}
                        name='message'
                        value={message}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={"mt-8 text-right"}>
                    <Button
                        onClick={handleButtonSend}
                        className={""}>
                        Send
                    </Button>
                </div>
            </div>
            {/* Hidden. Required by emailjs, values are mapped to state. */}
            <form ref={formRef} onSubmit={handleSendEmail} style={{ visibility: 'hidden' }}>
                <div><input className="text-white" type='text' name='from_name' onChange={() => { }} value={fromName} /></div>
                <div><input type='text' name='from_email' onChange={() => { }} value={fromEmail} /></div>
                <div><input type='text' name='message' onChange={() => { }} value={message} /></div>
                <div><input id='button_send' type='submit' value='Send' /></div>
            </form>
        </PageContainer>
    );
}

export default Contact;
