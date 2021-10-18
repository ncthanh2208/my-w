import React from 'react';
import NavBar from '../components/navigation/Navigation'
const ContactPage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <section>
                <div className="container mx-auto relative pt-5 lg:px-40 text-center">
                    <h2 className='text-white text-2xl my-8 font-medium sm:text-4xl'>The site is under development and will be finished soon...</h2>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ContactPage;