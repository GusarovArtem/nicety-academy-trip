import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd', width: '100%'}}>
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                    aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="dropdown">
                <a className="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="icon-user"></i> Catalog
                </a>
                <a className="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="icon-user"></i> Pricing
                </a>
                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                    <li><a tabIndex="-1" href="#">Action</a></li>
                    <li><a tabIndex="-1" href="#">Another action</a></li>
                    <li><a tabIndex="-1" href="#">Something else here</a></li>
                    <li className="divider"></li>
                    <li><a tabIndex="-1" href="#">Separated link</a></li>
                </ul>
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link btn"
                       style={{backgroundColor: "#FBD851", color: "black", marginRight: "10px"}} href="/auth/signup">Sign
                        Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn" style={{backgroundColor: "#FBD851", color: "black"}} href="/auth/login">Log
                        In</a>
                </li>
            </ul>
        </nav>
    )
        ;
}

export default Navbar;
