"use client";
import React, { useState } from "react";
import "./styles.css";

const Popup = () => {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!open);
  };

  const popupClassName = open
    ? "popup-container popup-open"
    : "popup-container";

  return (
    <>
      <button className="popup-button" onClick={togglePopup}>
        {open ? "X" : "?"}
      </button>
      <div className={popupClassName}>
        <div className="image-container">
          <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaVF34cmkR9afNAjcLRVCV0dvHA2xm_ddMUEgAeL11FHMnwBQjR-3FALTx7VtMODZDlKrXFSsnBLtAJs-N6ldrgzztpgQX1U-dJxXkao1yN2r3DqQfE=w2400"
            alt="도움말1"
          />
          <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaUTrw8bA7sn60EvoX9rW2jDWiervJnhHMPybSGsAWBb2t5Np-_6a3ybLO6YBALy8d205TO6ujz6PbS77-Az_SH9_cIMZslnICPDb9dEEeXLa9Dixy4=w2400"
            alt="도움말2"
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
