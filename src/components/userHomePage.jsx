import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextLoop from "react-text-loop";
import Link from "react-router";
import SelectSearch from "react-select-search";
import Select from "react-select";
import DisplayResults from "./DisplayResults";

function UserHomePage() {
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

  var searchBar = {
    width: "700px",
    textAlign: "center"
  };

  var hrStyle = {
    border: "0",
    height: "1px",
    backgroundImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
  };

  var hugeGap = {
    marginTop: "80px"
  };
  var smallGap = {
    marginTop: "20px"
  };

  var nameMain = {
    fontSize: "55px",
    fontWeight: "700",
    textAlign: "center"
  };
  var greetingMain = {
    padding: "0px",
    marginTop: "30px",
    fontWeight: "600",
    marginLeft: "5px"
  };
  var actualgreetingMain = {
    padding: "0px",
    marginTop: "30px",
    fontSize: "30px",
    marginLeft: "5px"
  };

  var strongStyle = {
    color: "#61071f"
  };

  var scraper = require("artproject-scraper");

  scraper(function(err, randomArt) {
    if (!err) console.log(randomArt);

    // Output:
    //
    // {
    //   image: 'http://lh4.ggpht.com/cLJpANVeHxbEdjmRMUu7E0YBYdbGoRVd87igKPdXbgvKt69qWoWg_7-6GE9U=s1200',
    //   title: 'Portrait of Nini Lopez',
    //   link: 'https://www.google.com/culturalinstitute/browse/Portrait%20of%20Nini%20Lopez',
    //   description: 'Nini Lopez first appeared in the work of Auguste Renoir (1841–1919) in La Loge (The Theatre Box), painted in 1874. The young woman from Montmartre, cruelly nicknamed Nini-Gueule-de-Raie, or "fish face", is shown alongside the artist\'s brother. Although the artwork was immediately purchased by the art dealer "le Père Martin", Renoir, like many of his Impressionist friends, was experiencing serious financial difficulty at the time. In the spring of',
    //   creator: 'Pierre-Auguste Renoir',
    //   date: '1876'
    // }
  });


  const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 }
  ];

  const currentTime = new Date().getHours;
  var greetingMsg;

  if (currentTime < 12) {
    greetingMsg = "Good Morning";
  } else if (currentTime < 18) {
    greetingMsg = "Good Afternoon";
  } else {
    greetingMsg = "Good Evening";
  }

    var moviesNames = require("movies-names");
    var movieNameRandom = moviesNames.random().title;
    var castNameRandom1 = moviesNames.random().cast[0];

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
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
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
        {/* <hr style={hrStyle} /> */}

        <Row className="justify-content-md-center" style={hugeGap}>
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h4>
              <TextLoop interval={3000}>
                <span style={greetingMain}>
                  Try searching for{" "}
                  <strong style={strongStyle}>
                    "{moviesNames.random().title}"
                  </strong>
                </span>

                <span style={greetingMain}>
                  Look up{" "}
                  <strong style={strongStyle}>
                    "{moviesNames.random().cast[0]}"
                  </strong>
                </span>

                <span style={greetingMain}>
                  Love movies like{" "}
                  <strong style={strongStyle}>
                    "{moviesNames.random().title}"
                  </strong>
                  ?
                </span>

                <span style={greetingMain}>
                  Lookup{" "}
                  <strong style={strongStyle}>
                    "{moviesNames.random().cast[0]}"
                  </strong>
                </span>

                <span style={greetingMain}>
                  How about{" "}
                  <strong style={strongStyle}>
                    "{moviesNames.random().title}"
                  </strong>
                  ?
                </span>

                <span style={greetingMain}>
                  Watched{" "}
                  <strong style={strongStyle}>
                    "{moviesNames.random().title}"
                  </strong>
                  ?
                </span>

                <span style={greetingMain}>
                  Craving some{" "}
                  <strong style={strongStyle}>
                    "{moviesNames.random().genres[0]}"
                  </strong>
                  ?
                </span>

                <span style={greetingMain}>
                  Remember{" "}
                  <strong style={strongStyle}>
                    "{movieNameRandom}"
                  </strong>
				  {" "}
                  from{" "}
                  <strong style={strongStyle}>
                    "{castNameRandom1}"
                  </strong>
                  ?
                </span>
              </TextLoop>
            </h4>
          </Col>
          <Col xs lg="2"></Col>
        </Row>

        <Row className="justify-content-md-center" style={smallGap}>
          <Col xs lg="2"></Col>
          <Col md="auto">
            <div style={searchBar}>
              <Select
                options={scaryAnimals}
                onChange={opt => console.log(opt.label, opt.value)}
              ></Select>
            </div>
          </Col>
          <Col xs lg="2"></Col>
        </Row>

        <Row className="justify-content-md-center" style={smallGap}>
          <Col xs lg="2"></Col>
          <Col md="auto">
            <DisplayResults />
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </div>
    </div>
  );
}

export default UserHomePage;
