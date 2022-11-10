import React from 'react'
import "./Footer.css"
// Images
import footerLogo from "../../assets/software-cloud-2.png"
const Footer = () => {
  return (
    <>
        
        
    <footer>
        <div className="container">
            <div>
                <p> © جميع الحقوق محفوظه 2022</p>
                <a href="https://www.softwarecloud2.com">Software Cloud 2</a>
            </div>
            <div>
                <img src={footerLogo} alt='footer' loading="lazy" className="img-fluid"/>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer