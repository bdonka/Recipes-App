import React, { useState } from 'react';
import ModalForm from './ModalForm';

const OwnRecipeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  }

  return (
    <div>
      <button onClick={handleOpenForm}>Open form to add your own recipe</button>
      {isOpen && (
        <ModalForm />
      )}
    </div>
  )
}

export default OwnRecipeButton;