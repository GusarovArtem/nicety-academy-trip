import React from 'react';
import '../styles/GreetingPage.css';
import background_image from '../assets/background-image.svg';
import Footer from "../components/Footer";

function GreetingPage() {
    return (
        <div>
            <header className="header">
                <a href="/" className="logo">Nicety</a>
                <nav className="navbar-menu" style={{display: 'flex', alignItems: 'center'}}>
                    <div className="dropdown">
                        <a className="" data-toggle="dropdown" href="#">
                            <i className="icon-user"></i>Catalog
                            <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                            <li><a tabIndex="-1" href="#">Java</a></li>
                            <li><a tabIndex="-1" href="#">PHP</a></li>
                            <li><a tabIndex="-1" href="#">Python</a></li>
                            <li><a tabIndex="-1" href="#">Bash</a></li>
                            <li className="divider"></li>
                            <li><a tabIndex="-1" href="#">JavaScript</a></li>
                            <li><a tabIndex="-1" href="#">HTML/CSS</a></li>
                        </ul>
                    </div>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                    <a className="nav-link btn font-bold"
                       style={{backgroundColor: "#FBD851", color: "black", marginRight: "10px"}}
                       href="/auth/signup">Sign up</a>
                    <a className="nav-link btn font-bold" style={{backgroundColor: "rgb(255 240 240)", marginLeft: '5px', color: "black"}}
                       href="/auth/login">Log in</a>
                </nav>
            </header>
            <div className="text-with-image">
                <section className="home">
                    <div className="home-content">
                        <h1 className="project-heading">Practice code by doing <span>PROJECTS</span></h1>
                        <h3>Improve your development skills by <span>training</span> with your peers on code kata that
                            continuously challenge and push your coding practice.</h3>
                        <button className="get-started">Explore projects</button>
                    </div>
                </section>
                <img src={background_image} alt="Background" style={{marginTop: '-50px', width: '35%'}}/>
            </div>
            <Footer/>
        </div>
    );
}

export default GreetingPage;
