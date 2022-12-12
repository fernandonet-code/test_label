import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

function ContentVideo() {
    return (
        <div className="container my-2">
            <div className="row text-center m-auto">
                <div className="display-1 mt-3 text-white"><strong>Empowering Startups</strong></div>
                <p className="text-white w-50 mx-auto my-4 d-block"> Providing our clients with the strategic guidance to make the right technology and business decisions. We will help you develop the best operational processes for your startup.</p>
                <div className="row mx-auto mb-5">
                    <a className="text-white mx-3" href="#">
                        <BsPlayCircleFill className="my-3 mx-auto" color="white" style={{ fontSize: "100px" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContentVideo;