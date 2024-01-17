import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import ResumeList from "../components/ResumeList";
import Footer from "../components/Footer";

const Resume = () => {
    return (
        <>
            <Navbar />
            <ResumeCard />

            <ResumeList />
            <Footer />
        </>
    );
}

export default Resume;