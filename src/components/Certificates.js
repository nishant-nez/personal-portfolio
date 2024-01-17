import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';

const Certificates = () => {
    const myCertificates = [
        {
            title: 'Data Analyst with Python',
            date: 'October 22, 2022',
            id: '5f66e7939e826048c35a631930f352aee9a5b1da',
            image: '/images/analyst.png',
            link: 'https://www.datacamp.com/statement-of-accomplishment/track/5f66e7939e826048c35a631930f352aee9a5b1da'
        },
        {
            title: 'Data Analyst with Python',
            date: 'October 22, 2022',
            id: '5f66e7939e826048c35a631930f352aee9a5b1da',
            image: '/images/analyst.png',
            link: 'https://www.datacamp.com/statement-of-accomplishment/track/5f66e7939e826048c35a631930f352aee9a5b1da'
        },
        {
            title: 'Python for Data Science, AI & Development',
            date: 'June 11, 2023',
            id: 'V7PQE38FZJ2N',
            image: '/images/ibm0.png',
            link: 'https://www.coursera.org/account/accomplishments/certificate/V7PQE38FZJ2N'
        },
    ];

    return (
        <div className='pl-10'>
            <div className='my-10'>
                <div className="text-2xl font-bold">
                    Certificates
                </div>
                <div className='flex mt-1 mb-10'>
                    <Divider
                        sx={ {
                            width: '90px',
                            backgroundColor: '#2196f3',
                            height: '4px',
                            borderRadius: '3px',
                        } }
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pb-10'>
                { myCertificates.map((data) => (
                    <motion.div
                        key={ data.id }
                        whileHover={ { translateY: -10 } }
                        className='shadow-lg hover:shadow-2xl rounded-xl cursor-pointer border border-gray-400'
                        onClick={ () => window.open(data.link, '_blank') }
                    >
                        <div className='grid md:grid-cols-2'>
                            <img src={ data.image } alt='' className='rounded-tl-xl rounded-bl-xl h-full' />
                            <div className='flex flex-col justify-center ml-6 mr-4 md:ml-12 py-8'>
                                <div className='text-xl font-bold'>{ data.title }</div>
                                <div className='text-sm pt-3 pb-1'>{ data.date }</div>
                                <div className='text-xs text-gray-400 overflow-clip'>ID: { data.id }</div>
                            </div>
                        </div>
                    </motion.div>
                )) }
            </div>

        </div>
    );
}

export default Certificates;