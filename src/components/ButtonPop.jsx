import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



function Example() {
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="danger" onClick={handleShow}>
				Delete
      </Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Changes</Modal.Title>
				</Modal.Header>
				<Modal.Body>The selected artwork will be permanently deleted. Proceed with caution</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
          </Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
          </Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;