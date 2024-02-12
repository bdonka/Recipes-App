import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import SingleRecipe from './SingleRecipe';

Modal.setAppElement('#root');

const ModalRecipe = ({ selectedRecipe, addToBuyList }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalBackgroundRef = useRef(null);

  useEffect(() => {
    setModalIsOpen(true);
  }, [selectedRecipe])

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        contentLabel="Single Recipe Modal"
        overlayClassName="modal-overlay"
      >
        {selectedRecipe ? (
          <SingleRecipe recipe={selectedRecipe} addToBuyList={addToBuyList} />
        ) : (
          <div>Error: Brak danych przepisu</div>
        )}
        <button onClick={closeModal}>Close</button>
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

export default ModalRecipe;