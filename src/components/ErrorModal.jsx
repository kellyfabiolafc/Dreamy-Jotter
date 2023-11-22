import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ErrorModal = ({ errorMessage, handleClose }) => {
  const [show, setShow] = useState(true);

  const handleCloseModal = () => {
    setShow(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCloseModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Understood
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
