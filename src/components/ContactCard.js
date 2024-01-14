import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const ContactCard = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-between px-24 bg-gray-200 py-20 sm:flex-row'>
                <Typography
                    variant='h2'
                    sx={ { fontSize: 34, fontWeight: 550, fontFamily: 'Poppins', color: 'grey.900' } }
                >
                    Contact
                </Typography>
                <Typography
                    variant='h2'
                    sx={ { fontSize: 16, fontWeight: 400, fontFamily: 'Poppins', color: 'grey.500', paddingTop: 2 } }
                >
                    Get in Touch
                </Typography>
            </div>
            <Divider />
        </>
    );
}

export default ContactCard;