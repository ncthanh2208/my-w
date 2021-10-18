import React from 'react';
import NavBar from '../components/navigation/Navigation'
import ImageLink from '../components/ImageLink';
import { SKILL_IMAGES } from '../constants';
import { FiGithub,FiFacebook,FiMail } from "react-icons/fi";
const HomePage = () => {

    return (
        <React.Fragment>
            <section className="hero-section">
                <NavBar />
                <div className="container py-28 sm:py-36 mx-auto px-5 lg:px-40">
                    <p className="text-2xl text-white">🙌 Hi there. I'm Thanh Nguyen</p>
                    <p className="text-white text-2xl pt-7 font-medium sm:text-3xl">I'm full-stack developer.I have passion for learning new languages and
                        technologies to improve programming skills and knowledge in software
                        development.</p>
                    <button className="bg-grey text-xl mt-5 px-5 py-2 rounded-xl hover:bg-yellow transition-colors duration-300">Contact me</button>
                </div>
            </section>
            <section className="container mx-auto py-6 lg:px-40">
                <div className="text-center">
                    <h2 className='text-white text-2xl mb-8 font-medium sm:text-4xl pb-5'>Skills</h2>
                    <ImageLink imgClassName='card-img' images={SKILL_IMAGES} />
                </div>
            </section>
            <section className="hero-section">
                <div className="container py-10 mx-auto">
                    <h2 className='text-white text-2xl mb-8 font-medium sm:text-4xl pb-5 text-center'>Find me on</h2>
                    <div className="flex flex-wrap justify-center mt-8">
                        <a href='https://github.com/ncthanh2208' target='_blank' title='Github' className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300'><FiGithub color='white' size='2rem'/></a>
                        <a href='mailto:nguyenchithanh228244@gmail.com' target='_blank' title='Email' className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300'><FiMail color='white' size='2rem'/></a>
                        <a href='https://www.facebook.com/nguyen.thanh228/' target='_blank' title='Facebook' className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300'><FiFacebook color='white' size='2rem'/></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default HomePage;