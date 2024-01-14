import React, { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';

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

    return (
        <div className="flex flex-col gap-14 md:flex-row w-full items-center justify-center p-16">
            <div className="p-4 rounded-full shadow-xl hover:shadow-2xl border border-gray-200">
                <Avatar
                    alt="Nishant Khadka"
                    src="/images/nishant.jpg"
                    sx={ { width: 400, height: 400 } }
                />
            </div>

            <div className="">
                <ReactTextTransition springConfig={ { tension: 300, friction: 10 } }>
                    <Typography
                        variant="body2"
                        sx={ { color: 'grey.500', fontSize: 18 } }
                    >
                        { items[currentIndex] }
                    </Typography>
                </ReactTextTransition>
                <Typography
                    variant="h3"
                    sx={ { fontWeight: 'bold', fontFamily: 'Poppins' } }
                >
                    Nishant Khadka
                </Typography>
            </div>
        </div>
    );
}

export default Profile;