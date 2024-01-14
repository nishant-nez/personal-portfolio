import Divider from '@mui/material/Divider';

import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Divider />
            <Profile />
        </div>
    );
}

export default Home;