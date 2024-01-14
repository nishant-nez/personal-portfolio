import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Home = () => {
    document.title = "Nishant Khadka";

    return (
        <div className="home">
            <Navbar />

            <Profile />
            <Skills />

            <Footer />
        </div>
    );
}

export default Home;