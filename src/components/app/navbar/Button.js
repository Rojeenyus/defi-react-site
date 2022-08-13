import React from "react";

function Button({ setModal, modal }) {
  let handleModal = () => setModal(!modal);
  return (
    <a className="btn" onClick={handleModal}>
      Connect
    </a>
  );
}

export default Button;
