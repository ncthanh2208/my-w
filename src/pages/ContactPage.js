import React from 'react';
import NavBar from '../components/navigation/Navigation'
const ContactPage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <span className="text-yellow">
                This is Contact Page
            </span>
        </React.Fragment>
    );
}

export default ContactPage;