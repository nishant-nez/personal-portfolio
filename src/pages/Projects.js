import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsCard from "../components/ProjectsCard";
import ProjectList from "../components/ProjectList";

const Projects = () => {
    return (
        <>
            <Navbar />
            <ProjectsCard />
            <ProjectList />

            <Footer />
        </>
    );
}

export default Projects;