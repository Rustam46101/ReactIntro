import React from 'react';
import Logo from "./components/logo.js"
import Navigation from "./components/navigation.js"
import Profile from "./components/profile.js"
import "./App.css";



function App() {
  return (
    <div className="row">
       <Logo/>
       <Navigation/>
       <Profile/> 
    </div>



  );
}

export default App;
