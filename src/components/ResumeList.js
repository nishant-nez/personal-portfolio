import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Certificates from './Certificates';

const ResumeList = () => {
    const myExperience = [
        {
            title: "Software Developer Intern",
            company: "Green Tick Nepal",
            date: "Jul 2024 - Nov 2024",
            description: "Engaged in extensive research and development of a Security Information and Event Management (SIEM) system, with a focus on the effective utilization of Elasticsearch. Led the development of a comprehensive Ticket Management System featuring advanced capabilities for Ticket, SLA, User, Reports, and Notification management. Spearheaded the creation of a DDoS protection system, overseeing tools setup, configuration, automation, coding, deployment, and product management. Implemented Redis to streamline processes, resulting in significantly reduced load times and improved response times. Managed the setup, configuration, and optimization of the ELK stack, developing and refining data pipelines. Conducted in-depth research on the dark web and online security, enhancing knowledge in cybersecurity best practices and threat mitigation.",
        },
        {
            title: "DevOps Intern",
            company: "Deerwalk Institute of Technology",
            date: "Dec 2022 - Apr 2024",
            description: "Developed a network monitoring web app with real-time tracking and alerts, created a QR code inventory management system, managed AWS and local servers, automated Fortinet firewall tasks, deployed applications using CI/CD pipelines and Docker, contributed to fiber optic cabling migration, and provided IT support and network management.",
        },
    ];

    const myEducation = [
        {
            title: "B.Sc. CSIT",
            institute: "Deerwalk Institute of Technology",
            date: "2021 - Present",
            description: "Bachelors of Science in Computer Science and Information Technology (B.Sc. CSIT)",
        },
        {
            title: "+2",
            institute: "Little Angels' College",
            date: "2018 - 2020",
            description: "Passed +2 with Physical Science from Little Angels' School with 3.65 GPA.",
        },
        {
            title: "S.E.E",
            institute: "Little Angels' School",
            date: "2017 - 2018",
            description: "Passed Secondary Education Examination (SEE) from Little Angels' School with 3.85 GPA.",
        },
    ];

    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className="flex flex-col md:flex-row gap-8">
                <div className='w-[100%] md:w-1/2 pl-10'>
                    <div className='my-10'>
                        <div className="text-2xl font-bold">
                            Experience
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

                    {
                        myExperience.map((data) => {
                            return (
                                <div className='mb-10' key={ data.title }>
                                    <div className='flex gap-4 items-center'>
                                        <Chip
                                            label={ data.date }
                                            variant='outlined'
                                            sx={ {
                                                color: 'grey.700',
                                                borderColor: '#2196f3',
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                borderRadius: '14px',
                                                padding: '4px',
                                                borderWidth: '2px'
                                            } }
                                        />
                                        <div>
                                            <p className='text-gray-700'>{ data.company }</p>
                                            {/* <p className='text-gray-700'>Sifal, Kathmandu</p> */ }
                                        </div>
                                    </div>
                                    <div className='pl-10 pt-4'>
                                        <p className='font-semibold text-xl pb-2'>{ data.title }</p>
                                        <p className='text-gray-800'>{ data.description }</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='w-[100%] md:w-1/2 pl-10'>
                    <div className='my-10'>
                        <div className="text-2xl font-bold">
                            Education
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

                    {
                        myEducation.map((data) => {
                            return (
                                <div className='mb-10' key={ data.title }>
                                    <div className='flex gap-4 items-center'>
                                        <Chip
                                            label={ data.date }
                                            variant='outlined'
                                            sx={ {
                                                color: 'grey.700',
                                                borderColor: '#2196f3',
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                borderRadius: '14px',
                                                padding: '4px',
                                                borderWidth: '2px'
                                            } }
                                        />
                                        <p className='text-gray-700'>{ data.institute }</p>
                                    </div>
                                    <div className='pl-10 pt-4'>
                                        <p className='font-semibold text-xl pb-2'>{ data.title }</p>
                                        <p className='text-gray-800'>{ data.description }</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <Certificates />
        </div>
    );
}

export default ResumeList;