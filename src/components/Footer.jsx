import { Link } from "react-router-dom"
import { navbarItems } from "../utils/constants"
import footerlogo from "../assets/footerlogo.svg"
import assetz from "../assets/assetz.svg"
import sambhav from "../assets/sambhav.svg"
import veggy from "../assets/veggy.png"
import arrow from "../assets/arrow.svg"
import download from "../assets/download.svg"

const Footer = () => {
  return (
    <footer id="footer" className="common-section position-relative">
        <img src={veggy} alt="veggy" className="img-fluid position-absolute veggy" loading="lazy"/>
        <div className="container-fluid">
            <div className="footer-container">
                <div className="footer-top">
                  <div className="footer-top-left">
                    <img src={footerlogo} alt="footer-logo" className="img-fluid" loading="lazy"/>
                  </div>
                  <div className="footer-divider"></div>
                  <div className="footer-top-right">
                    <img src={assetz} alt="assetz" className="img-fluid" loading="lazy"/>
                    <img src={sambhav} alt="sambhav" className="img-fluid" loading="lazy"/>
                  </div>
                </div>
                <div className="footer-mid">
                  <div className="footer-mid-left">
                    <p className="aspekta-thin">
                      NH 44, Avathi Village, Kasaba Hobli, Devanahalli, Bangalore Rural - 562 110.
                      <img src={arrow} alt="arrow" className="img-fluid" loading="lazy"/>
                    </p>
                  </div>
                  <div className="footer-mid-right">
                    {
                      navbarItems.map(item => (
                        <Link className="inter-semi footer-items text-color-9" to={item.route} key={item.id}>{item.title}</Link>
                      ))
                    }
                    <div className="brochure-button">
                      <a className="text-color-9 aspekta-reg text-uppercase d-flex">
                        <img src={download} alt="download" className="img-fluid" loading="lazy"/>
                        E - Brochure
                      </a>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <div className="footer-bottom-left">
                    <div className="inter-semi">RERA Registration No</div>
                    <p className="aspekta-thin">PRM/KA/RERA/1251/446/PR/050523/005911</p>
                  </div>
                  <div className="footer-bottom-right">
                    <span className="aspekta-thin">Copyright © Assetz . All rights reserved. 2023</span>
                  </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer