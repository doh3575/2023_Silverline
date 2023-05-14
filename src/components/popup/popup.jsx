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
        <img
          src="https://lh3.googleusercontent.com/pw/AJFCJaVZTO-0oQrvM7UZ4tuLIG-ki4SCf_ZnpS0PWG9v8VT8gCf-FOE4205GBxxg3WxoI8ltwZeYBhikp_kO90esIfAAc3hZvZzzYwhpITpyCd9KFNmd6Q4=w2400"
          alt="이미지"
          style={{ width: "60%", height: "80%" }}
        />
      </div>
    </>
  );
};

export default Popup;
