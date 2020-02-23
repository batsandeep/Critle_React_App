import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonPop from "./ButtonPop";
import ButtonPopEdit from "./ButtonPopEdit";

function DisplayResults() {

	var smallGap = {
		marginTop: "20px"
	};
	var buttRight = {
		marginRight: "20px"
	}
	var imgView = {
		width: "180px",
		height: "180px",
		marginTop: "20px"
	}

return (
	<div>
		<h1>Results</h1>

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
						<Card.Img variant="top" src={require("./dummyProfilePic.jpg")} style={imgView} />
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
);
	
}


export default DisplayResults;