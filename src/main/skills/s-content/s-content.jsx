import React from 'react'
import "./s-content.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ComputerIcon from '@mui/icons-material/Computer';
import DataArrayIcon from '@mui/icons-material/DataArray';

const SkillsContent = () => {
  return (
    <div className="s-content-container">

        <div className="s-content-card">
            <div className="s-content-img">
               {/* <img src="https://img.freepik.com/free-photo/website-html-code-browser-view-printed-white-paper-closeup-view_211682-164.jpg?w=740&t=st=1672846295~exp=1672846895~hmac=8208a7381305f30baba3dfa02253383081c24f1ed646b2a19f0c9114b023722e" alt="Loading" /> */}
               <img src="https://img.freepik.com/free-vector/responsive-concept-illustration_114360-834.jpg?w=740&t=st=1673860450~exp=1673861050~hmac=8a0779d0f42895eecf7ab2add3df63a60ed8996433c72419cdfac0b5757a109d" alt="" />
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                    <h3>Technical Skills</h3>
                    <div className="s-content-list">
                        <ul>
                            <li>React.Js</li>
                            <li>Node.Js</li>
                            <li>Express.Js</li>
                            <li>JavaScript</li>
                            <li>SpringBoot</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div className="s-content-card">
            <div className="s-content-img">
                {/* <img src="https://img.freepik.com/free-vector/creative-mini-designers-changing-website-interface-tiny-persons-covering-computer-screen-with-paint-digital-content-flat-vector-illustration-teamwork-marketing-development-concept-banner_74855-22995.jpg?w=740&t=st=1672859149~exp=1672859749~hmac=602f942d7e5d8b5db7e1e33c8e100d9f0af931587f8345a8fe1ba1a77a7e5857" alt="Loading" /> */}
                <img src="https://img.freepik.com/free-vector/designer-life-concept-illustration_114360-1537.jpg?w=740&t=st=1673859662~exp=1673860262~hmac=d5fae22968cbb3c11ac222750378c845359be233499e9bb09070450c122de61e" alt="" />
                {/* <img src="https://img.freepik.com/free-vector/company-employees-sharing-thoughts-ideas_74855-5469.jpg?w=740&t=st=1672858023~exp=1672858623~hmac=3f020b98814b7d4ce68e1b5c3459e1c021b5ab5ce2d3bcaf0eb1e6ee78e695d0" alt="Loading" /> */}
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                      <h3>Professional Skills</h3>
                      <div className="p-s-list">
                      <span><InterpreterModeIcon sx={{color:"#229954",m:"-5px"}}/> &nbsp; Excellent communication and presentation skills</span>
                      <br/>
                      <span><GroupsIcon sx={{color:" #d35400 ",m:"-5px"}}/> &nbsp; Strong teamwork and collaboration abilities</span>
                      <br/>
                      <span><DoneAllIcon sx={{color:"#229954",m:"-5px"}}/> &nbsp; Proven problem-solving and debugging skills</span>
                      </div>                    
                </div>
            </div>
        </div>


        <div className="s-content-card">
            <div className="s-content-img">
                {/* <img src="https://img.freepik.com/free-vector/certification-concept-illustration_114360-5171.jpg?w=740&t=st=1672858889~exp=1672859489~hmac=adb687a27aec77496b0ceb62bdb9f50f34ce4144e3b22d38c108e0ef5692a3a7" alt="Loading" /> */}
                <img src="https://img.freepik.com/free-vector/problem-solving-labyrinth-concept-illustration_114360-2072.jpg?w=740&t=st=1673859964~exp=1673860564~hmac=f3cb3e7afe04f1dc88f835076d8c58fa1b2fde5478297a7374839ed8ee133ca2" alt="" />
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                    <h3>Qualifications</h3>
                    <div className='q-s-list'>
                      <div className="list-heading">
                      <h4><VerifiedIcon sx={{color:"green",m:"-5px"}}/> &nbsp; Under Graduate</h4>
                      <h5 className='space-2'>2015-19</h5>
                      </div>
                      <sub>with a CGPA of 7.00</sub>
                      <div className="list-heading">
                      <h4><VerifiedIcon sx={{color:"skyblue",m:"-5px"}}/> &nbsp; HSC </h4>
                      <h5 className='space-3'>2014-15</h5>
                      </div>
                      <sub>with an aggregate of 90.91%</sub>
                      <div className="list-heading">
                      <h4><VerifiedIcon sx={{color:"skyblue",m:"-5px"}}/> &nbsp; SSLC </h4>
                      <h5 className='space-4'>2012-13</h5>
                      </div>
                      <sub>with an aggregate of 97%</sub>                                   
                    </div>
                </div>
            </div>
        </div>

        <div className="s-content-card">
            <div className="s-content-img">
                {/* <img src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1672859254~exp=1672859854~hmac=2e2dd3d45ee25e4ef67406df710cbe2a1a9e84e34edb759da839da8e7015f5d0" alt="Loading" /> */}
                <img src="https://img.freepik.com/free-vector/content-concept-illustration_114360-2127.jpg?w=740&t=st=1673859840~exp=1673860440~hmac=8b83a0af7d54af09832e2a9a15f6343e1c792004001492b740860c476d7f6ddc" alt="" />
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                    <h3>Areas of Expertise</h3>
                    <div className="a-s-list">
                        <h4><DashboardIcon sx={{color:"violet",m:"-5px"}}/> &nbsp; Well verse with third party integration like Slack, Dropbox, ChargeBee and so on</h4>
                        <h4><ComputerIcon sx={{color:"green",m:"-5px"}}/> &nbsp; Single-page application (SPA) development</h4>
                        <h4><DataArrayIcon sx={{color:"orangered",m:"-5px"}}/> &nbsp; Database design and management</h4>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SkillsContent;