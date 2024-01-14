import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { motion } from 'framer-motion';
import { useState } from 'react';

import mySkills from '../mySkills.json';


const Skills = () => {
    const [skills, setSkills] = useState(mySkills);
    return (
        <div className=" max-w-[1320px] my-6 mx-auto">
            <Typography
                variant='h4'
                sx={ { fontSize: 20, fontWeight: 500, fontFamily: 'Poppins', paddingLeft: 8, paddingRight: 8 } }
            >
                Skills
            </Typography>
            <div className='flex pl-16 mb-10'>
                <Divider
                    sx={ {
                        width: '55px',
                        backgroundColor: '#2196f3',
                        height: '4px',
                        borderRadius: '3px',
                    } }
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-16'>
                {
                    Object.entries(skills).map(([key, value]) => {
                        return (
                            <motion.div
                                whileHover={ { scale: 1.1 } }
                                key={ key }
                                className='rounded-2xl flex items-center gap-10 border border-blue-500 p-4 cursor-pointer hover:bg-blue-500 hover:text-white'
                            >
                                <img src={ value.url } alt={ key } className='h-14 w-14 overflow-hidden' />
                                <Typography
                                    variant='h2'
                                    sx={ { fontSize: 20, fontWeight: 500, fontFamily: 'Poppins' } }
                                >
                                    { key }
                                </Typography>
                            </motion.div>
                        );
                    })
                }
            </div>

        </div>
    );
}

export default Skills;