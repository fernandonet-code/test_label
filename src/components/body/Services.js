import React from "react";
import { IoIosPerson } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai"
import { HiOutlineLightBulb } from "react-icons/hi";

const icons = [
    <IoIosPerson className="my-2 mx-auto" style={{ fontSize: "70px" }} />,
    <BsGraphUp className="my-2 mx-auto" style={{ fontSize: "70px" }} />,
    <AiOutlineDollarCircle className="my-2 mx-auto" style={{ fontSize: "70px" }} />,
    <HiOutlineLightBulb className="mt-2 mx-auto" style={{ fontSize: "70px" }} />
]
const titles = ["Entrepreneurs", "Capital Markets", "Business Plan", "Startups"]
const description = "We work with ecosystem leaders, corporations and startups worldwide."

function Services() {
    return (
        <div className="container p-5 my-4">
            <div className="row text-center">
                <p className="lead">
                    WE HELP INNOVATIVE STARTUPS TO FIND AND FIX WEAK POINTS AND LAUNCH THE PRODUCT
                </p>
                <div className="display-3 mb-4">
                    <strong>Special outstanding service for startups</strong>
                </div>
            </div>
            <div className="row my-4 gx-2">
                {
                    titles.map((title, index) => {
                        return (
                            <div className="col">
                                <a className="nav-link active" href="#">
                                    <div className="card p-2 shadow" style={{ width: "16rem", height: "15rem" }} key={index}>
                                        {icons[index]}
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services;