import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                    aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="catalogDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Catalog
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Java</a>
                            <a className="dropdown-item" href="#">Python</a>
                            <div className="dropdown-divider">JavaScript</div>
                            <a className="dropdown-item" href="#">PHP</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Library</a>
                            <a className="dropdown-item" href="#">Tech Interview</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Weekend Podcasts</a>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="btn btn-primary">Make own project</button>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link btn"
                           style={{backgroundColor: "#FBD851", color: "black", marginRight: "10px"}} href="/user/register">Sign
                            Up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn" style={{backgroundColor: "white", color: "black"}} href="/user/login">Log
                            In</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
