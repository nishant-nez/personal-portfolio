import { useState } from "react";
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

// snack
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={ 7 } ref={ ref } variant="filled" { ...props } />;
});

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const serviceID = 'service_u1t0dyt';
        const templateID = 'template_evvt1f8';
        const publicKey = 'CRXdJzV6J5l-H2uYy';

        if (!formData.email || !formData.name || !formData.subject || !formData.message) {
            setSnackType('error');
            setSnackMessage('Please fill all the fields');
        } else {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                from_subject: formData.subject,
                message: formData.message
            };
            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then((response) => {
                    setSnackType('success');
                    setSnackMessage('Message sent successfully');
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                }).catch((error) => {
                    setSnackType('error');
                    setSnackMessage('Could not send the email!');
                });
        }

        setOpen(true);
    };


    // snack
    const [open, setOpen] = useState(false);
    const [snackType, setSnackType] = useState('');
    const [snackMessage, setSnackMessage] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className="max-w-[1320px] mx-auto my-6">
            <div className="my-8">
                <Divider />
            </div>
            <div className="text-2xl font-bold pl-10">
                How Can I Help?
            </div>
            <div className='flex mt-1 mb-10 pl-10'>
                <Divider
                    sx={ {
                        width: '90px',
                        backgroundColor: '#2196f3',
                        height: '4px',
                        borderRadius: '3px',
                    } }
                />
            </div>

            <div className="flex flex-col gap-10 items-center lg:flex-row">
                <div className="lg:pl-10">
                    <Box
                        component="form"
                        sx={ {
                            '& > :not(style)': { m: 1, width: '40ch', marginBottom: 3 },
                        } }
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            type="text"
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={ {
                            '& > :not(style)': { m: 1, width: '40ch', marginBottom: 3 },
                        } }
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic1"
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange }
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={ {
                            '& > :not(style)': { m: 1, width: '40ch', marginBottom: 3 },
                        } }
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic2"
                            label="Subject"
                            variant="outlined"
                            type="text"
                            name="subject"
                            value={ formData.subject }
                            onChange={ handleChange }
                        />
                    </Box>
                </div>

                <div>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Message"
                        name="message"
                        multiline
                        minRows={ 9 }
                        variant="outlined"
                        style={ { width: '400px' } }
                        value={ formData.message }
                        onChange={ handleChange }
                    />
                </div>

                <Button
                    variant="contained"
                    sx={ {
                        backgroundColor: '#fff',
                        color: 'black',
                        border: '2px solid #2196f3',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        width: 200,
                        height: 57,
                        fontSize: 18,
                        '&:hover': {
                            backgroundColor: '#2196f3',
                            color: '#fff',
                        },
                    } }
                    onClick={ handleSubmit }
                >
                    Send Message
                </Button>
            </div>

            {/* snack */ }
            <Snackbar
                open={ open }
                autoHideDuration={ 4000 }
                onClose={ handleClose }
                sx={ { minWidth: 400, minHeight: 120 } }
                anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
            >
                <Alert onClose={ handleClose } severity={ snackType } sx={ { width: '100%', fontSize: 18 } }>
                    { snackMessage }
                </Alert>
            </Snackbar>
        </div>
    );
}

export default ContactForm;