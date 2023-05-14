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
        {open ? "x" : "?"}
      </button>
      <div className={popupClassName}>
        <img
          src="https://ifh.cc/v-hTvdRf.png"
          alt="이미지"
          style={{ width: "40%", height: "60%" }}
        />
      </div>
    </>
  );
};

export default Popup;
