import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, description, actions }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        "z-index": "10",
        color: "red",
        height: "100%",
        width: "100%",
        position: "fixed",
        "background-color": "grey",
        left: "0",
        top: "0",
      }}
    >
      <h4>{title}</h4>
      <div>{description}</div>
      {actions()}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
