import React from "react";
import "./Wallet.css";
import Cookies from "js-cookie";
import History from "./History";
import Currencies from "./Currencies";

function Wallet({ setWallet, wallet, transactions }) {
  let handleDisconnect = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
    Cookies.remove("auth");
    window.location.reload();
  };
  let handleWallet = () => setWallet(!wallet);

  return (
    <div className="modal">
      <div id="main-con" className="modal-content">
        <span className="close" onClick={handleWallet}>
          &times;
        </span>
        <div className="wallet-flex">
          <div className="wallet-container padding-right">
            <h1>Wallet</h1>
            <Currencies transactions={transactions}></Currencies>
          </div>
          <div className="wallet-container">
            <h1>History</h1>
            <History></History>
          </div>
        </div>
        <a onClick={handleDisconnect} style={{ cursor: "pointer" }}>
          Disconnect
        </a>
      </div>
    </div>
  );
}

export default Wallet;
