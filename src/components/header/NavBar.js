import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

function NavBar() {
    return (
        <div className="row mx-auto">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navbar-brand text-white" href="#">LIBEL ACADEMY</a>
                        </li>
                    </ul>
                    <div class="nav-item dropdown">
                        <a class="nav-link text-white dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown">
                            Home
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <a className="nav-link active text-white mx-3" href="#">About</a>
                    <a className="nav-link active text-white mx-3" href="#">Services</a>
                    <a className="nav-link active text-white mx-3" href="#">Pricing</a>
                    <a className="nav-link active text-white mx-3" href="#">Products</a>
                    <a className="nav-link active text-white mx-3" href="#">News</a>
                    <a className="nav-link active text-white mx-3" href="#"><FiShoppingCart color="white" /></a>
                    <a className="nav-link active text-white mx-3" href="#"><BsSearch color="white" /></a>
                    <button className="btn btn-primary rounded-pill mx-3" type="submit">Contact Us</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;