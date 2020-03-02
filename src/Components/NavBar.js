

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ApiApp from '../ApiApp';
import Image from "../images/lang.png";
import LoginForm from '../Pages/LoginForm';
import Footer from '../Components/Footer';

function changeBackground(e) {
    e.target.style.color = 'pink';
}

function changeBackground2(e) {
    e.target.style.color = 'white';
}

export default function NavBar() {
    return (
        <Router>
            <div className="NavLinks">
                <nav>
                    <div>
                        <Link to="/" onMouseOver={changeBackground} onMouseLeave={changeBackground2} style={{color:"white", textDecoration:"none", onMouseOver:"pink"}}>Home</Link>
                    </div>
                    <div>
                        <Link to="/login" onMouseOver={changeBackground} onMouseLeave={changeBackground2} style={{color:"white", textDecoration:"none"}}>Login</Link>
                    </div>
                    <div>
                        <Link to="/phrases" onMouseOver={changeBackground} onMouseLeave={changeBackground2} style={{color:"white", textDecoration:"none"}}>Saved</Link>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <Login />
                        {/* <LoginSignup /> */}
                    </Route>
                    <Route path="/phrases">
                        <Phrases />
                    </Route>
                    <Route path="/">
                        <Home />
                        <ApiApp />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h4>Welcome to Translation Station</h4>;
}

function Login() {
    return (
        <div>
            <h4>Login/Sign Up</h4>
            <div className="salut">
                    <img src={Image} alt="Hello in different languages"></img>
            </div>
            <LoginForm />
            <Footer />
        </div>
)};

function Phrases() {
    return (
        <div>
            <h4>Saved Phrases</h4>
            <div className="salut">
                    <img src={Image} alt="Hello in different languages"></img>
            </div>
        </div>
)};