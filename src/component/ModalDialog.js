import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalDialog = ({ currentBand, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{currentBand.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-4">
            <img
              src={currentBand.thumb1}
              width="140px"
              height="85px"
              alt={currentBand.name}
            />
          </div>
          <div className="col-4">
            <img
              src={currentBand.thumb2}
              width="140px"
              height="85px"
              alt={currentBand.name}
            />
          </div>
          <div className="col-4">
            <img
              src={currentBand.thumb3}
              width="140px"
              height="85px"
              alt={currentBand.name}
            />
          </div>
        </div>
        <div className="row">
          <p className="p-2">{currentBand.info}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDialog
