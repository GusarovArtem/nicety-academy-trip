import React from 'react';

function Footer() {
    return (
        <footer className="footer-10">
            <div className="container">
                <div className="row mb-5 pb-3 no-gutters">
                    <div className="col-md-4 mb-md-0 mb-4 d-flex">
                        <div className="con con-1 w-100 py-5">
                            <div className="con-info w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="ion-ios-call"></span>
                                </div>
                                <div className="text">
                                    <span>(+00) 1234 5678</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-4 d-flex">
                        <div className="con con-2 w-100 py-5">
                            <div className="con-info w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="ion-ios-mail"></span>
                                </div>
                                <div className="text">
                                    <span>info@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-4 d-flex">
                        <div className="con con-3 w-100 py-5">
                            <div className="con-info w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="ion-ios-pin"></span>
                                </div>
                                <div className="text">
                                    <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4 mb-md-0 mb-4">
                                <h2 className="footer-heading">About</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="d-block">Out story</a></li>
                                    <li><a href="#" className="d-block">Awards</a></li>
                                    <li><a href="#" className="d-block">Our Team</a></li>
                                    <li><a href="#" className="d-block">Career</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-md-0 mb-4">
                                <h2 className="footer-heading">Company</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="d-block">Our services</a></li>
                                    <li><a href="#" className="d-block">Clients</a></li>
                                    <li><a href="#" className="d-block">Contact</a></li>
                                    <li><a href="#" className="d-block">Press</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-md-0 mb-4">
                                <h2 className="footer-heading">Resources</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="d-block">Blog</a></li>
                                    <li><a href="#" className="d-block">Newsletter</a></li>
                                    <li><a href="#" className="d-block">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-md-0 mb-4">
                        <h2 className="footer-heading">Subscribe</h2>
                        <form action="#" className="subscribe-form">
                            <div className="form-group d-flex">
                                <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
                                <button type="submit" className="form-control submit rounded-right">Subscribe</button>
                            </div>
                            <span className="subheading">Get digital marketing updates in your mailbox</span>
                        </form>
                    </div>
                </div>
                <div className="row mt-5 pt-4 border-top">
                    <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
                        <p className="copyright mb-0">
                            ©{new Date().getFullYear()} All rights reserved. | This template is made with <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib.com</a>
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-4 text-md-right">
                        <ul className="ftco-footer-social p-0">
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter"></span></a></li>
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"></span></a></li>
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
