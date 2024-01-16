import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { motion } from 'framer-motion';

const Socials = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 max-w-[1320px] mx-auto my-12 px-16'>
            <motion.div
                whileHover={ { scale: 1.1 } }
            >
                <a href="mailto:khadkanishant1@gmail.com" target='_blank' rel='noreferrer' className="flex items-center gap-6">
                    <MailOutlineIcon sx={ { fontSize: 75, color: '#2196f3' } } />
                    <div >
                        <p className="text-xl sm:text-3xl">khadkanishant1@gmail.com</p>
                    </div>
                </a>
            </motion.div>
            <motion.div
                whileHover={ { scale: 1.1 } }
                className='flex md:justify-end'
            >
                <a href="https://github.com/nishant-nez" target='_blank' rel='noreferrer' className="flex items-center gap-6">
                    <GitHubIcon sx={ { fontSize: 75, color: '#2196f3' } } />
                    <div >
                        <p className="text-xl sm:text-3xl">nishant-nez</p>
                    </div>
                </a>
            </motion.div>
            <motion.div
                whileHover={ { scale: 1.1 } }
            >
                <a href="https://www.linkedin.com/in/nishant-khadka/" target='_blank' rel='noreferrer' className="flex items-center gap-6">
                    <LinkedInIcon sx={ { fontSize: 75, color: '#2196f3' } } />
                    <div >
                        <p className="text-xl sm:text-3xl">nishant-khadka</p>
                    </div>
                </a>
            </motion.div
            >
            <motion.div
                whileHover={ { scale: 1.1 } }
                className='flex md:justify-end'
            >
                <a href="https://www.instagram.com/nishantt.nez/" target='_blank' rel='noreferrer' className="flex items-center gap-6">
                    <InstagramIcon sx={ { fontSize: 75, color: '#2196f3' } } />
                    <div >
                        <p className="text-xl sm:text-3xl">nishantt.nez</p>
                    </div>
                </a>
            </motion.div>
        </div>
    );
}

export default Socials;