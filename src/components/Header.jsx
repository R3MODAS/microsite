import Logo from "../assets/logo.svg"
import Call from "../assets/call.png";
import HamMenu from "../assets/ham-menu.svg"
import { navbarItems } from "../utils/constants"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav id="navbar" className="container-fluid">

        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>

        <ul className="nav-item-container">
            {
                navbarItems.map(navItem => (
                    <li key={navItem.id} className="nav-item position-relative">
                        <NavLink to={`${navItem.route}`} className="aspekta-semi text-color-1 position-relative">{navItem.title}</NavLink>
                    </li>
                ))
            }
        </ul>

        <div className="nav-buttons">
            <div>
                <button className="enquire-btn bg-color-1 text-color-2 inter-semi text-uppercase">
                    <img src={Call} alt="call" />
                    <span>Enquire Now</span>
                </button>
            </div>

            <div className="ham-menu">
                <img src={HamMenu} alt="ham-menu" />
            </div>
        </div>
    </nav>
  )
}

export default Header