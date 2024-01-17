import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const ResumeCard = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-between px-24 bg-gray-200 py-20 sm:flex-row'>
                <Typography
                    variant='h2'
                    sx={ { fontSize: 34, fontWeight: 550, fontFamily: 'Poppins', color: 'grey.900' } }
                >
                    Resume
                </Typography>
                <Typography
                    variant='h2'
                    sx={ { fontSize: 16, fontWeight: 400, fontFamily: 'Poppins', color: 'grey.500', paddingTop: 2 } }
                >
                    My Experience
                </Typography>
            </div>
            <Divider />
        </>
    );
}

export default ResumeCard;