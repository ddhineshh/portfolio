import React from "react";
import "./c-projects.css";
import Drinksbuddy from '../../../assests/about/chegostore-project-Img.png';
import Chatapp from '../../../assests/about/chatapp-project-Img.png'
import Stack from '../../../assests/about/stack.png'
import Elitemail from '../../../assests/about/elitemailpro-project-Img.png'
import Realtor from '../../../assests/about/realtor.png'
import Memories from '../../../assests/about/memories.png'


const ProjectsContent = () => {
  return (
    
    <>
      <div className="container-3">
      <div className="box">
          <div className="img-container">
            <img
              src={Elitemail}
              alt="loading"
            />
            <h4>EliteMail Pro</h4>
            <a href="https://fantastic-phoenix-b4a723.netlify.app/" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/ddhineshh/bulk-email-front-end.git" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/ddhineshh/bulk-email-backend.git" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Realtor}
              alt="loading"
            />
            <h4>Realtor</h4>
            <a href="https://realtor-clone-react-gold.vercel.app/" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/ddhineshh/realtor-main.git" target="_blank" rel="noreferrer" className="pro-btn">Github</a>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Drinksbuddy}
              alt="loading"
            />
            <h4>Drinks Buddy</h4>
            <a href="https://chego-store.netlify.app" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/ddhineshh/justore-fe.git" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/ddhineshh/justore-fe.git" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Chatapp}
              alt="loading"
            />
            <h4>Chat</h4>
            <a href="https://chat-fe-8kpa.onrender.com" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/ddhineshh/textchat-fe.git" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/ddhineshh/textchat-be.git" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Memories}
              alt="loading"
            />
            <h4>Memories</h4>
            <a href="https://memries.netlify.app" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/ddhineshh/memories-client.git" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/ddhineshh/memories-be.git" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Stack}
              alt="loading"
            />
            <h4>Stack Overflow Clone</h4>
            <a href="https://64783157d4d0e43d7a189020--remarkable-blini-15cc6e.netlify.app/" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/ddhineshh/stack-overflow-frontend.git" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/ddhineshh/stack-overflow-clone-backend.git" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
