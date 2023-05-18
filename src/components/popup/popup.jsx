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
            src="https://lh3.googleusercontent.com/xK8fzihEKudg5cnNg9mvzLkKb3sO8GTm1texELq9w8YAfva3Ud8srf5ypK8uI81Bv_cC-Jpmrh3ivRYmLT0S_yylTjGDo0RIZ1QkQJqF4R0lBuXSdxCoh3VGzkkx9bVZSPNF1ARP6g=w2400"
            alt="도움말2"
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
