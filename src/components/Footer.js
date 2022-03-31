import React from "react";

export default function Footer() {
    return (
        <div class="footer-container">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div class="col-md-4">
                    <span>&copy; Gaming Gadgets</span>
                </div>
                <div class="col-md-4">
                    <span>Yhteystiedot: </span><br />
                    <span>Puhelin: +666 666 66666</span><br />
                    <span>Sähköposti: gaming.gadgets@giimeil.com</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="icon-style" href="#"><i class="fa fa-twitter-square"></i></a></li>
                    <li class="ms-3"><a class="icon-style" href="#"><i class="fa fa-instagram"></i></a></li>
                    <li class="ms-3"><a class="icon-style" href="#"><i class="fa fa-facebook-square"></i></a></li>
                </ul>
            </footer>
        </div>
    );
}