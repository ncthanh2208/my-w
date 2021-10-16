import React from 'react';
import NavBar from '../components/navigation/Navigation'
const HomePage = () => {

    return (
        <React.Fragment>
            <NavBar/>
            <span className="text-yellow">
            This is Home Page
            </span>
        </React.Fragment>
    );
}
export default HomePage;