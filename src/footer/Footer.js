import './footer.css'
import logo from './lomdei_logo.png'
import linkedIn from './linkedin.png'


const Footer = () => {

    return(
        <div id="footer">
            <div id="footer-left">
                <div>
                    <a href="/">
                        <img id="footer-logo" src={logo} alt="Lomdei Logo"/>
                    </a>
                    <a href="https://www.linkedin.com/company/lomdei">
                        <img id="linkedin" src={linkedIn} alt="linkedin"/>
                    </a>
                </div>
                <div >
                    &copy; Lomdei
                </div>
            </div>
            <div id="footer-right">

            </div>
        </div>
    )
}

export default Footer;