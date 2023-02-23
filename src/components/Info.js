import React from "react"
import DisplayPic from "../photos/jan.jpeg"

export default function Info() {
    return (
        <nav className="info--container">

            <img src={DisplayPic} alt="Display Picture" className="info--picture" />

            <h1>Jan Swidzinski</h1>

            <h4>Human</h4>

            <a href="mailto: janeksus21@gmail.com" target="_blank" className="info--email__link">
                <span>
                    <ion-icon name="mail"></ion-icon>
                </span>
                <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/jan-%C5%9Bwidzi%C5%84ski/" target="_blank" className="info--linkedin__link">
                <span>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span>LinkedIn</span>
            </a>

        </nav>

    )
}

