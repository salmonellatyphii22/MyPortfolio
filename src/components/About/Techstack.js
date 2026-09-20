
import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFastapi,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiGit,
} from "react-icons/si";

import {
  FaBrain,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      {/* Programming Languages */}

      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus fontSize={"24px"} />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"24px"} />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript fontSize={"24px"} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase fontSize={"24px"} />
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* Web Technologies */}

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"24px"} />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact fontSize={"24px"} />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"24px"} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker fontSize={"24px"} />
        <div className="tech-icons-text">Docker</div>
      </Col>

      {/* Databases */}

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize={"24px"} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"24px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      {/* Core Computer Science */}

      <Col xs={4} md={2} className="tech-icons">
        <FaCode fontSize={"24px"} />
        <div className="tech-icons-text">
          Data Structures & Algorithms
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCode fontSize={"24px"} />
        <div className="tech-icons-text">
          Object-Oriented Programming
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase fontSize={"24px"} />
        <div className="tech-icons-text">
          Database Management
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCode fontSize={"24px"} />
        <div className="tech-icons-text">
          Operating Systems
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCode fontSize={"24px"} />
        <div className="tech-icons-text">
          Computer Networks
        </div>
      </Col>

      {/* AI & Machine Learning */}

      <Col xs={4} md={2} className="tech-icons">
        <FaBrain fontSize={"24px"} />
        <div className="tech-icons-text">RAG</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBrain fontSize={"24px"} />
        <div className="tech-icons-text">
          Prompt Engineering
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBrain fontSize={"24px"} />
        <div className="tech-icons-text">LangChain</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBrain fontSize={"24px"} />
        <div className="tech-icons-text">LangGraph</div>
      </Col>

      {/* Tools */}

      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;