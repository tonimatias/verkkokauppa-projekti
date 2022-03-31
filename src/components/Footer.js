import React from "react";

export default function Footer() {
    return (
        <div class="footer-container">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <span>&copy; Gaming Gadgets, +358 666 66666</span>
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