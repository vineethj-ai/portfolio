import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/vineeth-jawalkar"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Vineeth Jawalkar
              </a>
            </p>
            <p>Phone: +91-9480092097</p>
            <p>Email: vineethjawalkar26@gmail.com</p>
            <h4>Education</h4>
            <p>
              Bachelor of Arts in Visual Effects, Kalinga University (2017–2019)
            </p>
            <p>
              AAIP Arena Animation – Jayanagar, Bangalore
            </p>
            <p>
              Pre-University Mahesh PU college - Davangere (2014–2017)
            </p>
            <p>
              CBSE Amritha Vidyalam - Davangere (2004–2014)
            </p>
          </div>
          <div className="contact-box">
            <h4>Languages</h4>
            <div
              className="contact-social"
              style={{ paddingBottom: '0.5rem', borderBottom: 'none' }}
            >
              English
            </div>
            <div
              className="contact-social"
              style={{ paddingBottom: '0.5rem', borderBottom: 'none' }}
            >
              Kannada
            </div>
            <div
              className="contact-social"
              style={{ paddingBottom: '0.5rem', borderBottom: 'none' }}
            >
              Hindi
            </div>
            <div
              className="contact-social"
              style={{ paddingBottom: '0.5rem', borderBottom: 'none' }}
            >
              Telugu
            </div>
            <div
              className="contact-social"
            >
              Marathi
            </div>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vineeth Jawalkar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
