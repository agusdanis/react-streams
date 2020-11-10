import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  //   console.log("Modal: ", props);
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">
          {/* <p>Are you sure you want to delete this stream ?</p> */}
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
          {/* <button className="ui button red">Delete</button> */}
          {/* <button className="ui button">Cancel</button> */}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
