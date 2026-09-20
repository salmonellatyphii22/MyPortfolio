import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I'm Sweta Jha, a Computer Science Engineering student
              at Indira Gandhi Delhi Technical University for Women
              (IGDTUW), New Delhi. I am passionate about software
              development, problem-solving, and building practical
              applications that combine functionality with a great
              user experience.

              <br />
              <br />

              I have experience working with
              <i>
                <b className="purple">
                  {" "}C++, Python, JavaScript and Kotlin{" "}
                </b>
              </i>
              and enjoy exploring both frontend and backend development.

              <br />
              <br />

              My technical interests include developing
              <i>
                <b className="purple">
                  {" "}Web Applications, Android Applications,
                  and Backend Systems{" "}
                </b>
              </i>
              using technologies such as React.js, FastAPI,
              MongoDB, and Firebase.

              <br />
              <br />

              I have worked on projects including
                <i>
                  <b className="purple">
                    {" "}BingeBox, SnackShack, Student Academic Module,
                    HydroIQ, and an LLM-Based Indian Constitution Legal RAG Project{" "}
                  </b>
                </i>
                , each helping me strengthen my skills in frontend
                development, backend systems, Android application development,
                IoT-based solutions, and Large Language Model integration.

                <br />
                <br />

                I also enjoy solving Data Structures and Algorithms problems,
                continuously improving my coding skills, and exploring new
                technologies to build practical and impactful software solutions.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;