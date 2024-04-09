import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


export default function Footer(){
    return(
        <> 
        <div className="footer-company">
          
          <div className="footer-company-links">
          <div className="footer-company-title">Company</div>
            <Link to='#' className="footer-link">About</Link>
            <Link to='#' className="footer-link">Careers</Link>
            <Link to='#' className="footer-link">Terms</Link>
            <Link to='#' className="footer-link">Privacy</Link>
          </div>
          <div className="footer-contact">
          <div className="footer-copyright">©2024</div>
            <div className="footer-appname">DeenHub</div>
            <div className="footer-social-icons">
            <AiFillGithub />
            <BsFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
            </div>
          </div>
        <div className="footer-support">
          <div className="footer-support-links">
          <div className="footer-support-title">Support</div>
            <Link to='#' className="footer-link">FAQs</Link>
            <Link to='#' className="footer-link">Trust and Safety</Link>
            <Link to='#' className="footer-link">Cookie Preferences</Link>
            <Link to='#' className="footer-link">Report Issue</Link>
          </div>
        </div>
        
          </div>
          </>
    )
}