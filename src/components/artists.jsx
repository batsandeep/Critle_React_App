import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button1 from "react-bootstrap/Button";
import ButtonPop from "./ButtonPop";
import ButtonPopEdit from "./ButtonPopEdit";



function Artists() {

  var navImg = {
    width: "25px",
    marginLeft: "5px"
  };
  var navBrand = {
    fontSize: "25px",
    position: "static",
    top: "5px"
  };
  var paddingProfile = {
    marginRight: "15px"
  };

  var imgView = {
    width: "180px",
    height :"180px",
    marginTop : "20px"
  }

var hugeGap = {
  marginTop: "80px"
};  var nameMain = {
    fontSize: "55px",
    fontWeight: "700",
    textAlign: "center"
  };

  var actualgreetingMain = {
    padding: "0px",
    marginTop: "30px",
    fontSize: "30px",
    marginLeft: "5px"
  };
  var smallGap = {
    marginTop: "20px"
  };
  var buttRight = {
    marginRight : "20px"
  }

  const date = new Date();
  const currentTime = date.getHours();
  let greetingMsg;

  if (currentTime < 12) {
    greetingMsg = "Good Morning";
  } else if (currentTime < 18) {
    greetingMsg = "Good Afternoon";
  } else {
    greetingMsg = "Good Evening";
  }
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
          <img
            src={require("./newLogo.png")}
            alt="critle-logo"
            style={navImg}
          ></img>
          <span style={navBrand}> Critle</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <div class="collapse navbar-collapse" id="navbar-list-4">
          <Nav className="mr-auto">
            <Nav></Nav>
          </Nav>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img
                  src={require("./dummyProfilePic.jpg")}
                  alt="profile_pic"
                  width="30"
                  height="30"
                  border
                  class="rounded-circle"
                  style={paddingProfile}
                />
                <Navbar.Text>batsandeep</Navbar.Text>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Navbar>

      <div>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h2 style={actualgreetingMain}>{greetingMsg},</h2>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h1 style={nameMain}>Sandeep</h1>
          </Col>
          <Col xs lg="2"></Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h1 style={hugeGap}>Your Uploads</h1>
          </Col>
          <Col xs lg="2"></Col>
        </Row>

        <Row className="justify-content-md-center" style={smallGap}>
          <Col xs={6} md={4}>
            <center>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Image1</Card.Title>
                  <Card.Text>
                    This is the image 1 with this short description
                  </Card.Text>
                  <ButtonPop />
                </Card.Body>
              </Card>
            </center>
          </Col>
          <Col xs={6} md={4}>
            <center>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={require("./dummyProfilePic.jpg")}  style={imgView}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <ButtonPopEdit />
                  <span style={buttRight}></span>
                  <ButtonPop />
                </Card.Body>
              </Card>
            </center>
          </Col>
          <Col xs={6} md={4}>
            <center>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <ButtonPop />
                </Card.Body>
              </Card>
            </center>
          </Col>
        </Row>
      </div>

    
    </div>
  );
}

export default Artists;
