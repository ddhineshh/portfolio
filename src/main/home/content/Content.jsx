import React from "react";
import "./Content.css";
import Nav from "react-bootstrap/Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

const Content = () => {
  return (
    <section className="home-section">    
        <div className="home-content">

          <div className="home-img">
            <div className="card">
              <div className="imgBx">
              </div>
            </div>
            <div className="group-link-home">
            <a href="https://github.com/ddhineshh" target="_blank" rel="noreferrer" className="nav-github nav-link" id="hover-link">
              <GitHubIcon sx={{ fontSize: "30px", marginBottom: "35px",color:"black" }} />
              <h4>Github</h4>
            </a>

            <a href="https://www.linkedin.com/in/thirudhinesh/" target="_blank" rel="noreferrer" className="nav-github nav-link" id="hover-link">
              <LinkedInIcon sx={{ fontSize: "30px", marginBottom: "35px",color:"black" }} />
              <h4>Linkedin</h4>
            </a>

            <Nav.Link href="#contactme" className="nav-github" id="hover-link">
              <EmailIcon sx={{ fontSize: "30px", marginBottom: "35px",color:"black" }} />
              <h4>Email</h4>
            </Nav.Link>
          </div>
          </div>

          {/* home page */}

          <div className="home-data">
            <h1 className="home-title">
              <span>H</span>i !<br></br>I'<span>m</span> <span>Dh</span>i
              <span>nesh</span><span>   </span><span>Th</span>i<span>ru</span>
            </h1>
            <div className="wrapper">
              <p>I can Cook websites like</p>
              <div className="words">
                <span></span>
                <span>React.js + Express.js + Node.Js</span>
                <span>Spring Boot</span>
                <span>MySQL, MongoDB</span>
              </div>
            </div>
            <div className="home-btn-flex">
              <Nav.Link href="#contactme" className="hireme-btn" id="hiremebtn">
                Hire Me
              </Nav.Link>
              <a
                href="https://drive.google.com/file/d/17G2bsjHp_uk8mc4AY_8AN5qiC-v8jnJT/view?usp=drive_link"
                className="hireme-btn nav-link" id="resumebtn"
target="_blank" rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Content;
