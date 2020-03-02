import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Footer from '../Components/Footer';
import Header from '../Components/Header';



function HomePage() {
    return (
        <div>
            <Header />
            <LoginForm />
            <SignupForm />
            <Footer />
        </div>
    );
}



export default HomePage;