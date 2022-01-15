import './App.css';
import logo_animation from './Logo_Animation_1.mp4';

function App() {
  return (
    <><div className="Video_top">
      <video autoPlay muted loop id="myVideo">
        <source src={logo_animation} title="Colooper" type="video/mp4" />
      </video>
    </div><div className="content">
        <h1>Our site is coming soon!</h1>
      </div><div className="social-container footer">
        <h4>Get in touch with us</h4>
        <ul className="social-icons" style={{ marginBottom: 5 }}>
          <li><a href="https://www.facebook.com/colooperglobal"><i title="facebook" className="fa fa-facebook"></i></a></li>
          <li><a href="https://www.fa-instagram.com/colooperglobal"><i title="instagram" className="fa fa-instagram"></i></a></li>
          <li><a href="https://www.twitter.com/colooperglobal"><i title="twitter" className="fa fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/company/colooper"><i title="linkedin" className="fa fa-linkedin"></i></a></li>
          <li><a href="mailto:sales@colooper.com?subject = Quote Request for a New Idea&body = Message"><i title="Email" className="fa fa-envelope"></i></a></li>
        </ul>
        <h5 style={{ marginTop: 0, marginBottom: 10 }}>&copy; 2022 Colooper.All rights reserved</h5>
      </div></>
  );
}

export default App;
