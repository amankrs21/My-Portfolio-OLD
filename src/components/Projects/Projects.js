import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AngularTodo from "../../Assets/Projects/AngularTodo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AngularTodo}
              isBlog={false}
              title="Angular Todo"
              description="Sleek single-page application allowing users to create and manage todos. Leveraging Angular, it seamlessly saves todo entries in local storage, ensuring data persistence. An efficient and user-friendly solution for organizing tasks with a seamless user experience."
              ghLink="https://github.com/amankrs21/AngularTodo"
              demoLink="https://angulartodo.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AngularTodo}
              isBlog={false}
              title="Smart Exam"
              description="A robust MVC Architecture-based platform for managing Subject, Object, and Coding exams. The Object Exam features proctored types for enhanced security. This system efficiently handles diverse exam formats, providing a comprehensive solution for seamless and secure examination processes."
              ghLink="https://github.com/amankrs21/SmartExam"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AngularTodo}
              isBlog={false}
              title="Online Complaint"
              description="A user-friendly web application for efficiently managing and resolving complaints. Built with PHP, it streamlines the complaint submission and resolution process, offering a seamless experience for users to report and track their concerns with an intuitive online interface."
              ghLink="https://github.com/amankrs21/OnlineComplaint"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
