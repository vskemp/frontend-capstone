// import React, {Component} from 'react';



// class NavBar extends Component {
//     render() {
//         return (
//             <nav>
//                 <div className="nav">
//                     <div>
//                         <a href="users">Login/SignUp </a>
//                     </div>
//                         <div className="saved">
//                         <a href="phrases"> Saved </a> 
//                         </div>
//                     </div>
//             </nav>
//         );
//     }
// };

// export default NavBar;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                    </Route>
                    <Route path="/phrases">
                        <Phrases />
                    </Route>
                    <Route path="/">
                        <Home />
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
    return <h4>Login/Sign Up</h4>;
}

function Phrases() {
    return <h4>Saved Phrases</h4>;
}