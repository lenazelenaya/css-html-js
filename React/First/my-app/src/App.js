import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
    <div className = "App" >
        <Header />
        <Technologies />
    </div>
    );
}

function Header() {
    return (
        <div>
            <a href="#s"> Home </a>
            <a href="#s"> News </a>
            <a href="#s"> About </a>
        </div>
    );
}

function Technologies() {
    return (
        <div>
            <ul>
                <li> CSS3 </li>
                <li> HTML5 </li>
                <li> JS </li>
                <li> React </li>
            </ul>
        </div>
    );
}

export default App;