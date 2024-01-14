
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ContactsIcon from '@mui/icons-material/Contacts';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = () => {
    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={ { width: 350 } }
            role="presentation"
            onClick={ toggleDrawer(anchor, false) }
            onKeyDown={ toggleDrawer(anchor, false) }
            className=""
        >
            <div className='flex flex-col items-center justify-center h-screen gap-16'>
                <Link to='/resume' className='flex gap-8 items-center hover:bg-gray-200 w-full align-middle justify-center h-20'>
                    <DescriptionIcon sx={ { fontSize: 32 } } />
                    <p className=' text-2xl'>Resume</p>
                </Link>
                <Link to='/projects' className='flex gap-8 items-center hover:bg-gray-200 w-full align-middle justify-center h-20'>
                    <TipsAndUpdatesIcon sx={ { fontSize: 32 } } />
                    <p className=' text-2xl'>Projects</p>
                </Link>
                <Link to='/contact' className='flex gap-8 items-center hover:bg-gray-200 w-full align-middle justify-center h-20'>
                    <ContactsIcon sx={ { fontSize: 32 } } />
                    <p className=' text-2xl'>Contact</p>
                </Link>
            </div>
        </Box>
    );

    return (
        <div className='flex items-center justify-between px-12 pt-10 pb-8'>
            <Link to='/'>
                <div className='flex gap-2 items-center z-50 cursor-pointer'>
                    <Avatar style={ { backgroundColor: blue[500] } }>
                        <Typography variant='h5' className='bg-transparent'>
                            N
                        </Typography>
                    </Avatar>

                    <p className='font-bold text-xl'>Nishant</p>
                    <p className='text-xl'>Khadka</p>
                </div>
            </Link>

            <div className='hidden md:flex gap-14'>
                <Link to='/resume'>
                    <p className='text-gray-500 hover:text-gray-700 cursor-pointer'>Resume</p>
                </Link>
                <Link to='/projects'>
                    <p className='text-gray-500 hover:text-gray-700 cursor-pointer'>Projects</p>
                </Link>
                <Link to='/contact'>
                    <p className='text-gray-500 hover:text-gray-700 cursor-pointer'>Contact</p>
                </Link>
            </div>

            <div className='md:hidden'>
                <MenuIcon onClick={ toggleDrawer("right", true) } />
                <Drawer
                    anchor={ "right" }
                    open={ state["right"] }
                    onClose={ toggleDrawer("right", false) }
                >
                    { list("right") }
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
