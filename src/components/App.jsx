import React from "react";
import Login from "./Login";

let isLoggedIn = true;

const currentTime = new Date().getHours();
console.log(currentTime);


function App() {
    return (
        <div className="container">
            {/* {isLoggedIn?  <h1>Hello</h1> : <Login/>} */}
            {currentTime > 16 && <h1>Why you still working? go have some fun.</h1> }
            
        </div>
    );
}

export default App;
