
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Temporary images from the existing project assets
// Replace these with screenshots of your own projects later.
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          {/* BingeBox */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BingeBox"
              description="A Netflix-inspired streaming platform built using React.js and TMDB API. Integrated Firebase Authentication and developed backend services using FastAPI and MongoDB to support features such as user watchlists, viewing history, ratings, reviews, and search history."
              ghLink="https://github.com/salmonellatyphii22/BingeBox"
              demoLink="https://bingeboxnetc.onrender.com/"
            />
          </Col>

          {/* SnackShack */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SnackShack"
              description="An Android-based canteen ordering application developed using Kotlin and XML. The application allows users to browse menu items, add products to their cart, and proceed through the checkout process, providing a convenient digital canteen ordering experience."
              ghLink="https://github.com/salmonellatyphii22/CanteenOrder"
              demoLink="https://drive.google.com/file/d/1qdlgmNuTC7Luxr6kZpTY_Sx_fwJuk6-G/view?usp=sharing"
            />
          </Col>

          {/* LLM Indian Law */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LLM-Based Indian Legal RAG"
              description="An LLM-based Retrieval-Augmented Generation project focused on Indian legal and constitutional information. The system combines document retrieval with Large Language Models to provide context-aware responses and make legal information more accessible."
              ghLink="https://github.com/salmonellatyphii22/LLM_Indian_Law"
            />
          </Col>

          {/* HydroIQ */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="HydroIQ"
              description="An IoT-based water quality monitoring project designed to monitor water parameters using sensors and provide meaningful insights into water quality. The project focuses on sensor integration, data collection, and smart monitoring solutions."
              ghLink="https://github.com/salmonellatyphii22/water-quality-app"
            />
          </Col>

          {/* Student Academic Module */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Student Academic Module"
              description="A student academic management backend developed using FastAPI, SQLAlchemy, and MySQL. The system manages students, courses, subjects, enrollments, marks, and academic results through structured APIs and database relationships."
              ghLink="https://github.com/salmonellatyphii22/student_module"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;