import React from "react";

let isLoggedIn = true;

function rendering() {
    if (isLoggedIn) {
        return (
            <h1>Hello</h1>
        );
    } else {
        return (
            <form className="form">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        );
    }
}

function App() {
    return (
        <div className="container">
          {rendering()}
        </div>
    );
}

export default App;
