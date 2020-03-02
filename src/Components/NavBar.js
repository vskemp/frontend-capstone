

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ApiApp from '../ApiApp';
import Image from "../images/lang.png";

export default function NavBar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/phrases">Saved</Link>
                        </li>
                    </ul>
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