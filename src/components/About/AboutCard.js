import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm{" "}
            <span className="purple">Sweta Jha</span>{" "}
            from <span className="purple">New Delhi, India</span>.
            <br />
            I'm currently pursuing my{" "}
            <span className="purple">
              B.Tech in Computer Science Engineering
            </span>{" "}
            at{" "}
            <span className="purple">
              Indira Gandhi Delhi Technical University for Women (IGDTUW)
            </span>
            .
            <br />
            <br />
            I'm passionate about{" "}
            <span className="purple">
              Software Development, Full Stack Development,
              Android Development, and Artificial Intelligence
            </span>
            .
            <br />
            <br />
            I enjoy building practical applications and exploring
            technologies such as{" "}
            <span className="purple">
              React.js, FastAPI, Kotlin, MongoDB, and LLMs
            </span>
            .
            <br />
            <br />
            Some of my key projects include BingeBox, SnackShack,
            Student Academic Module, HydroIQ, and an{" "}
            <span className="purple">
              LLM-Based Indian Constitution Legal RAG Project
            </span>
            .
            <br />
            <br />
            Outside of coding, I enjoy solving Data Structures and
            Algorithms problems, learning new technologies, and
            continuously improving my development skills.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn, build, and create an impact through code!"
          </p>

          <footer className="blockquote-footer">Sweta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;