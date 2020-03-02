import React from 'react';

function LoginForm() {
    return(
        <div className="LogSignForm">
            <form>
                <h2>Login!</h2>
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <button>Login</button>
            </form>

            <form>
                <h2>Sign Up!</h2>
                <input placeholder="Create Username"></input>
                <input placeholder="Create Password"></input>
                <button>Sign Up</button>
            </form>
        </div>
    );
}


export default LoginForm;