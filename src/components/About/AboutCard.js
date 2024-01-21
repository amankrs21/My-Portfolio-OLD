import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Singh </span>
            from <span className="purple"> Vaishali, India.</span>
            <br />
            I am currently employed as a software developer at Tata Consultancy Services.
            <br />
            I have completed Bacherlors of Computer Application (BCA) at Parul University,
            and currently pursuing Masters of Computer Application (MCA) at Sastra University.
            <br />
            <br />
            Apart from coding, some other fields that I am interested in are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Geo Politics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Code your path, debug your challenges, and always remember: semicolons may break your code, but not your spirit."{" "}
          </p>
          <footer className="blockquote-footer">Aman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
