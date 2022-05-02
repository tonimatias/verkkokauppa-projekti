import React from "react";

export default function Footer() {
    return (
        <div className="footer-container">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div className="col-md-4">
                    <span>&copy; Gaming Gadgets</span>
                </div>
                <div className="col-md-4">
                    <span>Puhelin: +666 666 66666</span><br />
                    <span>Sähköposti: gaming.gadgets@giimeil.com</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="icon-style" href="https://twitter.com/?lang=en" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
                    <li className="ms-3"><a className="icon-style" href="https://www.instagram.com/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li className="ms-3"><a className="icon-style" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-square"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}