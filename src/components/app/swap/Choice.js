import React, { useEffect, useState } from "react";
import "./Choice.css";

function Choice({
  setChoice,
  choice,
  data,
  buySellStock,
  setBuyStock,
  setSellStock,
  setBuyPrice,
  setSellPrice,
  setSellStockId,
  setBuyStockId,
}) {
  let handleChoice = () => setChoice(!choice);

  let handleChoose = (name, price, id) => {
    if (buySellStock) {
      setBuyStock(name);
      setBuyPrice(price);
      setBuyStockId(id);
    } else {
      setSellStock(name);
      setSellPrice(price);
      setSellStockId(id);
    }
    setChoice(!choice);
  };

  return (
    <div className="modal">
      <div id="main-con" className="modal-content">
        <span className="close" onClick={handleChoice}>
          &times;
        </span>
        <div className="wallet-flex">
          <div className="wallet-container padding-right">
            <h1>Token Name</h1>
          </div>
          <div className="currency-container">
            <div
              className="sc-ksPlPm sc-kpXpMQ sc-czgevV sc-kehFtl eLAcZi dZbxzg giohnb jqpTxa currency-map"
              onClick={() => handleChoose("USD", 1, 0)}
            >
              <img
                className="sc-lbNHPp buCMyK"
                alt="ACA logo"
                src="https://app.arthswap.org/images/coins/0xfFFfFFfF00000000000000010000000000000000.png"
              />
              <div className="sc-fpIgQR gvLCNP">
                <div
                  title="ACA"
                  color="text"
                  className="sc-gsTCUz sc-lnnytw jlffp bCARSy"
                >
                  USD
                </div>
              </div>
            </div>
            {data.map((name, id) => {
              return (
                <div
                  className="sc-ksPlPm sc-kpXpMQ sc-czgevV sc-kehFtl eLAcZi dZbxzg giohnb jqpTxa currency-map"
                  key={id}
                  onClick={() => handleChoose(name.name, name.price, name.id)}
                >
                  <img
                    className="sc-lbNHPp buCMyK"
                    alt="ACA logo"
                    src="https://app.arthswap.org/images/coins/0xfFFfFFfF00000000000000010000000000000000.png"
                  />
                  <div className="sc-fpIgQR gvLCNP">
                    <div
                      title="ACA"
                      color="text"
                      className="sc-gsTCUz sc-lnnytw jlffp bCARSy"
                    >
                      {name.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choice;
