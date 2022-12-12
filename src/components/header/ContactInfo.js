import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BiBasketball } from "react-icons/bi";

function ContactInfo() {
    return (
        <div className="container-fluid" style={{ height: "10px" }}>
            <div className="row border-bottom">
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a className="nav-link active text-white mx-3" href="#">+1 212 946 2700</a>
                        <a className="nav-link active text-white mx-3" href="#">Help Desk</a>
                        <a className="nav-link active text-white mx-3" href="#">Why Sway</a>
                    </ul>
                    <a className="nav-link active text-white mx-3" href="#"><FaFacebookF color="white" /></a>
                    <a className="nav-link active text-white mx-3" href="#"><BsTwitter color="white" /></a>
                    <a className="nav-link active text-white mx-3" href="#"><BsInstagram color="white" /></a>
                    <a className="nav-link active text-white mx-3" href="#"><BiBasketball color="white" /></a>
                </nav>
            </div>
        </div>
    )
}

export default ContactInfo;