import React, { useState } from "react";
import Modal from "./modal";
import "./modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const HandleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={HandleModalPopup}>Show Modal Popup</button>
      {showModalPopup && (
        <Modal
          footer={<div>Customized Footer</div>}
          header={<div>Customized Header</div>}
          body={<div>Customized Body section</div>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalTest;
