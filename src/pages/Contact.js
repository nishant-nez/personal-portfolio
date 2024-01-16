import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContactCard />
            <div>
                <Socials />
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}

export default Contact;