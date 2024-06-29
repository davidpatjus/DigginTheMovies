import davidimage from '../../Assets/david.jpg'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-photo">
            <img src={davidimage} alt="Profile" />
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/david.patino.10004694" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/david.juspian/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/david-esteban-pati%C3%B1o-juspian-064482279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/davidpatjus" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:david.patino1@utp.edu.co" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://wa.me/3146200770" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Diggin The Movies. All rights reserved.</p>
          <p>Designed by [ DAVID PATIÑO ]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
