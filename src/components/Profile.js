import React, { useState, useEffect } from "react";
import ReactTextTransition from "react-text-transition";
import { Link } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Profile = () => {
    const items = ["DevOps Engineer", "React Developer", "Full Stack Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleDownload = () => {
        const pdfPath = process.env.PUBLIC_URL + '/files/nishant_resume.pdf';
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'nishant_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col gap-14 md:flex-row w-full items-center justify-center p-16">
            <div className="p-4 rounded-full shadow-xl hover:shadow-2xl border border-gray-200">
                <Avatar
                    alt="Nishant Khadka - profile picture"
                    src="/images/nishant.jpg"
                    sx={ { width: 400, height: 400 } }
                />
            </div>

            <div className="">
                <ReactTextTransition springConfig={ { tension: 300, friction: 10 } } className="flex justify-center md:justify-start">
                    <Typography
                        variant="body2"
                        sx={ {
                            color: 'grey.500',
                            fontSize: 18,
                        } }
                    >
                        { items[currentIndex] }
                    </Typography>
                </ReactTextTransition>
                <Typography
                    variant="h3"
                    sx={ { fontWeight: 'bold', fontFamily: 'Poppins' } }
                    className="py-4 text-center md:text-left"
                >
                    Nishant Khadka
                </Typography>
                <Typography
                    variant="body1"
                    sx={ { color: 'grey.600', fontSize: 18, fontFamily: 'Poppins' } }
                    className="max-w-[650px]"
                >
                    A Computer Science student and a tech enthusiast. Currently working as a DevOps intern at Deerwalk Institute of Technology.
                </Typography>
                <div className="flex gap-4 my-6 items-center justify-center md:justify-start">
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
                            width: 170,
                            height: 47,
                            fontSize: 16,
                            '&:hover': {
                                backgroundColor: '#2196f3',
                                color: '#fff',
                            },
                        } }
                        onClick={ handleDownload }
                    >
                        Download CV
                    </Button>
                    <Link to='/contact'>
                        <Button
                            variant="contained"
                            sx={ {
                                backgroundColor: '#fff',
                                color: 'black',
                                border: '2px solid #a1a1a1',
                                borderRadius: '20px',
                                textTransform: 'none',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 400,
                                width: 160,
                                height: 47,
                                fontSize: 16,
                                '&:hover': {
                                    backgroundColor: '#a1a1a1',
                                },
                            } }
                        >
                            Contact
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;