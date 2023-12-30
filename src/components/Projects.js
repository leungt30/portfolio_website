import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImgVAL from "../assets/img/VALORANT1.png";
import projImgChatGPT from "../assets/img/chatgpt1.jpg";
import projImgGericht from "../assets/img/gericht.jpg"
import projImgSirModel from "../assets/img/sirmodel.jpg";
import projImgNeuralNetwork from "../assets/img/ai_cartoon.jpg";
import projImgDeltahacks from "../assets/img/deltahacks logo.png";
import projImgCarla from "../assets/img/carla.jpg";

import vs2 from "../assets/img/vs2.0.png"
import projImgFAQ from "../assets/img/faq.avif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImgMathVis from "../assets/img/mathVis.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon4 from '../assets/img/nav-icon4.svg';
import projImgAssistant from "../assets/img/siri2.gif"

export const Projects = () => {

  const softwareSection = [
    {
      title: "Valorant Showdown Co-Manager",
      description: "Created an Automated Rank Checker to verify participants' entry into their correct brackets",
      imgUrl: projImgVAL,
      link: "https://www.valorantshowdown.com/"
    },    
    {
      title: "Virtual Assistant",
      description: "Design & Development of a voice activated assistant acompanied with a GUI",
      imgUrl: projImgAssistant,
      link : "https://github.com/COMPSCI-SPRING-PROJECT/AssistantAI"
    },
    {
      title: "Linear Algebra Visualizer",
      description: "Design & Development",
      imgUrl: projImgMathVis,
      link : "https://cs1xd3.online/ShowModulePublish?modulePublishId=98958bd3-4bb6-4c40-a897-c29ece3d34f9&fullscreen=true"
    },

    {
      title: "Infectious Disease Model",
      description: "Improved upon the SIR model. I developed my own scientific computation model to illustrate how a population reacts to an infectious disease with different properties. Changable parameters include: infection rate, recovery rate, birth rate, death rate, vaccination rate, vaccination efficiency, vaccination duration",
      imgUrl: projImgSirModel,
      link : "https://github.com/leungt30/SIRV-Model"
    },
    {
      title: "Neural Network Engine",
      description: "Created a neural network from scratch. Project includes neurons and layers. Still in progress.",
      imgUrl: projImgNeuralNetwork,
      link : "https://github.com/leungt30"
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  const websiteSection = [
    {
      title: "Valorant Showdown",
      description: "Developed Website. NOTE: the domain is now being used for a different website",
      imgUrl: projImgVAL,
      link: "https://www.valorantshowdown.com/"
    },
    {
      title: "ChatGPT Intro Website",
      description: "Design & Development",
      imgUrl: projImgChatGPT,
      link: "https://chat-gpt-website-nine.vercel.app/"
    },
    {
      title: "Gericht Restuarant Website",
      description: "Design & Development",
      imgUrl: projImgGericht,
      link: "https://restaurant-website-gules-tau.vercel.app/"
    },
    {
      title: "Valorant Showdown 2.0 website",
      description: "Design & Developer webpage for Valorant Tournament",
      imgUrl: vs2,
      link : "https://www.valorantshowdown.com/"
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  const otherSection = [
    {
      title: "AI Q&A Chat Bot",
      description: "Created and Trained an AI chatbot to answer questions FAQ questions about me",
      imgUrl: projImgFAQ,
    },
    {
      title: "Deltahacks 10 Logistics Executive",
      description: "Planned and executed everything neccessary to run a hackathon with over 700 attendees. My team and I worked to organize all the merchendise, food distrubution, venue planning, prize planning, and handled some sponsorship deals to make the hackathon possible.",
      imgUrl: projImgDeltahacks,
    },
    {
      title: "Research assistant",
      description: "Design & Development of software tools used by researchers to simulate vehicles and transportation systems in CARLA. ",
      imgUrl: projImgCarla,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out what I've worked on...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Software</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          websiteSection.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          softwareSection.map((project1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          otherSection.map((project3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project3}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
            <div style={{ textAlign: 'center' }}>
                <h4 style={{ display: 'inline-block' }}>Check out more here:</h4>
                  <div className="social-icon">
                    <a href="https://github.com/leungt30">
                      <img src={navIcon4} alt="github" style={{ verticalAlign: 'middle' }} />
                    </a>
                  </div>     
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  )
}
