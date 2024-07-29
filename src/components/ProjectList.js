import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';

const ProjectList = () => {
    const myProjects = [
        {
            title: "Avari",
            link: "https://github.com/nishant-nez/Avari-AU",
            image: "/images/av1.png",
            description: "",
            tags: "postgreSQL react express"
        },
        {
            title: "Online Voting System",
            link: "https://election.nishantkhadka.com.np",
            image: "/images/voting.png",
            description: "",
            tags: "django MySQL"
        },
        {
            title: "Real Estate Marketplace",
            link: "https://github.com/nishant-nez/Real-Estate-Marketplace",
            image: "/images/estate.png",
            description: "",
            tags: "nestJS nextJS postgreSQL socket.io fastAPI"
        },
        {
            title: "Network Monitoring",
            link: "https://github.com/nishant-nez/Network-Monitoring",
            image: "/images/network.png",
            description: "",
            tags: "react express node mongoDB"
        },
        {
            title: "Life Organizer",
            link: "https://github.com/nishant-nez/Life-Organizer",
            image: "/images/life.png",
            description: "",
            tags: "django postgreSQL celery"
        },
        {
            title: "Fortigate Automation (User Creation)",
            link: "https://github.com/nishant-nez/Add-Users-FortiGate",
            image: "/images/addusers.png",
            description: "",
            tags: "python selenium pandas"
        },
        {
            title: "Fortigate Automation (User Deletion)",
            link: "https://github.com/nishant-nez/Delete-Users-FortiGate",
            image: "/images/deleteusers.png",
            description: "",
            tags: "python selenium pandas"
        },
        {
            title: "TODO App",
            link: "https://github.com/nishant-nez/TODO-App",
            image: "/images/todo.png",
            description: "",
            tags: "flutter"
        },
        {
            title: "Personal Expenses App",
            link: "https://github.com/nishant-nez/Personal-Expenses",
            image: "/images/todo.png",
            description: "",
            tags: "flutter"
        },
        {
            title: "Banking App (UI)",
            link: "https://github.com/nishant-nez/Banking-App",
            image: "/images/todo.png",
            description: "",
            tags: "flutter"
        },
        {
            title: "Advanced Calculator",
            link: "https://github.com/nishant-nez/Advanced-Calculator",
            image: "/images/calculator.png",
            description: "",
            tags: "C++"
        },
        {
            title: "Laptop Price Extraction",
            link: "https://github.com/nishant-nez/Laptop-Pricelist",
            image: "/images/pricelist.png",
            description: "",
            tags: "python requests BeautifulSoup"
        },
        {
            title: "Hotel Recommendation",
            link: "https://github.com/nishant-nez/Hotel-Recommendation",
            image: "/images/hotel.png",
            description: "",
            tags: "python sqlite selenium BeautifulSoup"
        },
        {
            title: "QA Test using Python Script",
            link: "https://github.com/nishant-nez/QA-testsite",
            image: "/images/qa.png",
            description: "",
            tags: "python selenium QA"
        },
    ];

    return (
        <div className="max-w-[1320px] mx-auto">
            <div className="text-2xl mt-8 font-bold pl-10">
                My Projects
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
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 px-10">
                {
                    myProjects.map((item) => {
                        return (
                            <motion.div
                                whileHover={ { scale: 1.1 } }
                                key={ item.title }
                                onClick={ () => window.open(item.link, '_blank') }
                                className='cursor-pointer'
                            >
                                <Card sx={ { borderRadius: 6, height: '100%' } }>
                                    <CardMedia
                                        component="img"
                                        alt={ item.title }
                                        height="140"
                                        image={ item.image }
                                    />
                                    <CardContent sx={ { paddingLeft: 3 } }>
                                        <Typography gutterBottom variant="h5" component="div" color='#2196f3' fontFamily='poppins' fontSize={ 30 } fontWeight={ 500 }>
                                            { item.title }
                                        </Typography>
                                        {/* <Typography variant="body2" color="text.secondary" fontFamily='poppins'>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography> */}
                                    </CardContent>
                                    <div>
                                        <Stack direction="row" spacing={ 1 } sx={ { paddingLeft: 3, paddingBottom: 3 } }>
                                            {
                                                item.tags.split(' ').map((tag) => {
                                                    return (
                                                        <Chip label={ tag } key={ tag } onClick={ () => { } } />
                                                    )
                                                })
                                            }
                                        </Stack>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ProjectList;