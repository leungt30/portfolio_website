import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer", "Research Assistant", "Web Developer", "Web Designer", "UI/UX Designer", "Full Stack Dev.", "Deltahacks Exec." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
      // setDelta(prevDelta => prevDelta - 300);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Timothy `} <div className="txt-rotate" dataPeriod="1000" data-rotate={toRotate} ><span className="wrap" >{text}</span></div></h1>
                  <p>My name is Timothy Leung. I'm a 3rd year computer science student studying at McMaster University. I love trying and learning new things. I'm also a research assisant at McMaster and I've been working on projects related to autonomous vehicle systems and vehicle simulation. I'm also a part of the Deltahacks team where I work hard to bring a engaging, innovative and accessible hackathon to programmers of every level.  </p>

                  <a download href="https://github.com/leungt30/resume/raw/main/Resume.pdf" style={{ textDecoration: 'none' }} ><button>MY RESUME<ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
