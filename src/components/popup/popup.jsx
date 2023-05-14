import { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <button className="openBtn" onClick={togglePopup}>
        Open Popup
      </button>
      <div className="popupContainer">
        <div className="popupContent">
          <button className="closeBtn" onClick={togglePopup}>
            Close
          </button>
          <h2>Welcome to my popup!</h2>
          <img src="https://ifh.cc/g/W0sr2l.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            felis lectus. Ut nec ante euismod, gravida purus vel, maximus ipsum.
            Sed rutrum, nunc ac venenatis hendrerit, libero quam malesuada est,
            vitae faucibus nulla nisl sed ex. Donec vel accumsan neque. Vivamus
            tristique justo ut augue pellentesque rhoncus. Suspendisse rutrum
            aliquet eleifend. Nam rhoncus vel lorem eu bibendum. Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
