import "./Footer.css";
import RequestInviteBtn from "../btnRequestInvite/btn";

export default function Footer() {
  return (
    <footer>
      <div className="footer-social-media-container">
        <img src="./src/assets/images/logo.svg"/>
        <div className="social-media">
          <img src="./src/assets/images/icon-facebook.svg"/>
          <img src="./src/assets/images/icon-youtube.svg"/>
          <img src="./src/assets/images/icon-twitter.svg"/>
          <img src="./src/assets/images/icon-pinterest.svg"/>
          <img src="./src/assets/images/icon-instagram.svg"/>
        </div>
      </div>

      <div className="footer-nav">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="author-copy">
        <RequestInviteBtn />
        <h4>&copy; Easybank. All Rights Reserved</h4>
      </div>
    </footer>
  );
}
