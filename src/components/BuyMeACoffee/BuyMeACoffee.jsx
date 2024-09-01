import React from "react";
import css from "./BuyMeACoffee.module.scss";

const BuyMeACoffee = ({ closeModal }) => {
  const handleRedirection = () => {
    window.open("https://www.buymeacoffee.com/kamalnath", "_blank");
  };

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={closeModal}>×</button>
        <img src="/bmc_qr.png" alt="QR Code" className={css.qrCode} />
        <p className={css.modalText}>Scan the QR code or click below to support me!</p>
        <button className={css.redirectButton} onClick={handleRedirection}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default BuyMeACoffee;
