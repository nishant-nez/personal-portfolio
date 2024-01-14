const Footer = () => {
    const currentYear = Date().split(' ')[3];

    return (
        <footer className="footer footer-center bottom-0 w-full p-1 mt-10 bg-gray-300 text-gray-800">
            <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                    <p>Copyright © { currentYear } - Nishant Khadka </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;