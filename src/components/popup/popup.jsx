import React from "react";
import "./styles.css";

const Popup = ({ open, onClose }) => {
  const popupClassName = open
    ? "popup-container popup-open"
    : "popup-container";

  return (
    <>
      <button className="popup-button" onClick={onClose}>
        {open ? "?" : "X"}
      </button>
      <div className={popupClassName}>
        <h1>팝업창</h1>
        <p>팝업창 내용을 여기에 작성하세요.</p>
        <img src="https://ifh.cc/g/W0sr2l.png" alt="이미지" />
      </div>
    </>
  );
};

export default Popup;
