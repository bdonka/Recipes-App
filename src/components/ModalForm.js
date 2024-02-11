import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import AddOwnRecipeForm from './AddOwnRecipeForm';

Modal.setAppElement('#root');

const ModalForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const modalBackgroundRef = useRef(null);

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const onClickBackground = (e) => {
    if (e.target === modalBackgroundRef.current) {
      closeModal();
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Your Own Recipe Modal"
        overlayClassName="modal-overlay"
      >
        <AddOwnRecipeForm />
      </Modal>
      {modalIsOpen && (
        <div
          className={`modal-overlay ${modalIsOpen ? 'block-events' : ''}`}
          tabIndex={-1}
          ref={modalBackgroundRef}
          onClick={onClickBackground}
        ></div>
      )}
    </div>
  )
}

export default ModalForm;