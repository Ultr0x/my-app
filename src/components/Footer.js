import React from "react"

export default function Footer() {
    return (
        <div className="footer--container">
            
            <a href="https://github.com/Ultr0x" target="_blank" className="footer--github__link">
                <span>
                    <ion-icon name="logo-github"></ion-icon>
                </span>
                <span>GitHub</span>
            </a>

            <a href="https://twitter.com/jan_swidzinski" target="_blank" className="footer--twitter__link">
                <span>
                    <ion-icon name="logo-twitter"></ion-icon>
                </span>
                <span>Twitter</span>
            </a>
            <a href="---" target="_blank" className="footer--website__link">
                <span>
                    <ion-icon name="laptop"></ion-icon>
                </span>
                <span>Website</span>
            </a>
            

        </div>
    )
}