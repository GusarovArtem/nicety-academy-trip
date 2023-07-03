import Navigation from "./Navigation";
import logoAGH from "../assets/logo-agh.svg"
import logoWZ from "../assets/logo-wz.png"

const Header = () => {
    return (
        <div className="Header">
            <div className="header-container page-container">
                <div className="logo-wrapper">
                    <img src={logoAGH} className="logo-agh"></img>
                    <img src={logoWZ} className="logo-wz"></img>
                </div>
                <Navigation/>
            </div>
        </div>
    );
}

export default Header;