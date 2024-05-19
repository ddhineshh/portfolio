import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { Container, Row } from "react-bootstrap";
import { SiWorkplace } from "react-icons/si";

const Experience = () => {
    return (
        <Container fluid className="project-section" id='Experience'>

            <Container>
                <div style={{textAlign: 'center'}} > 
                    <h1  className="home-title"><span>W</span>o<span>rk</span> <span>Exper</span>i<span>ence</span> <i className="fa-brands fa-pagelines"></i></h1>       
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            animate={true}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(154 183 206)', color: '#2e2a2a' }}
                            date="November 2023 - Present"
                            iconStyle={{ background: 'rgb(154 183 206)', color: '#fff' }}
                            icon={<SiWorkplace />}
                        >
                            <h5 className="vertical-timeline-element-title">Software Developer</h5>
                            <h3 className="vertical-timeline-element-subtitle">TechnicaX</h3>
                            <p>
                            Working as a full stack developer in product called Redicane built using MERN stack which basically ticketing software which includes ticket to project conversion its expenses tracking and its timesheet to invoice generation.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Feb 2023 - Nov 2023"
                            contentStyle={{ background: 'rgb(227 174 194)', color: '#2e2a2a' }}
                            iconStyle={{ background: 'rgb(227 174 194)', color: '#fff' }}
                            icon={<SiWorkplace />}
                        >
                            <h5 className="vertical-timeline-element-title">Software Development Engineer - I</h5>
                            <h3 className="vertical-timeline-element-subtitle">10xOKR</h3>
                            <p>
                                Worked as a  Full-Stack developer For Productivity Tool mainly focuses Objective and Key Results built with Springboot and React Js
                            </p>
                        </VerticalTimelineElement>
                       
                        <VerticalTimelineElement
                            iconStyle={{ background: 'black', color: '#fff' }}
                            icon={<SiWorkplace />}
                        />
                    </VerticalTimeline>
                </Row>
            </Container>
        </Container>
    )
}

export default Experience