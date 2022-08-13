import React, { useState } from "react";
import "./Swap.css";
import Button from "../navbar/Button";
import { useOutletContext } from "react-router-dom";
import Choice from "./Choice";
import axios from "axios";
import Cookies from "js-cookie";

function Swap() {
  let [modal, setModal, id] = useOutletContext();
  let [choice, setChoice] = useState(false);
  let [buySellStock, setBuySellStock] = useState();
  let [buyStock, setBuyStock] = useState("");
  let [sellStock, setSellStock] = useState("");
  let [data, setData] = useState([]);
  const urlstock = "https://ancient-beyond-96499.herokuapp.com/stocks";

  let handleChoiceFalse = async (e) => {
    e.preventDefault();
    setChoice(!choice);
    setBuySellStock(false);

    let headers = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `JWT ${Cookies.get("auth")}`,
      },
    };

    try {
      const response = await axios.get(urlstock, headers);
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  let handleChoiceTrue = async (e) => {
    e.preventDefault();
    setChoice(!choice);
    setBuySellStock(true);

    let headers = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `JWT ${Cookies.get("auth")}`,
      },
    };

    try {
      const response = await axios.get(urlstock, headers);
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {choice ? (
        <Choice
          choice={choice}
          setChoice={setChoice}
          data={data}
          buySellStock={buySellStock}
          setBuyStock={setBuyStock}
          setSellStock={setSellStock}
        ></Choice>
      ) : (
        ""
      )}
      <div className="the-body">
        <div className="padding-container">
          <div className="exchange">
            <div className="box">
              <div className="top-part">
                <div className="left-letters">
                  <div className="left-letters-flex">
                    <h2>Swap</h2>
                    <div className="exchange-small">
                      Trade tokens in an instant
                    </div>
                  </div>
                </div>
                <div className="right-icons">
                  <div className="setting">
                    <button className="setting-icon"></button>
                    <button className="setting-icon">
                      <svg
                        viewBox="0 0 24 24"
                        color="textSubtle"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sc-bdnxRM dUfMqI"
                      >
                        <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="top-part">
                <div className="first-box">
                  <div className="first-boxx">
                    <div className="fromm">
                      <div className="fromm-letters">From</div>
                    </div>
                    <div className="amount">
                      <input
                        className="amount-input"
                        inputMode="decimal"
                        title="Token Amount"
                        type="text"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        placeholder="0.0"
                        minLength="1"
                        maxLength="79"
                      />
                      <button
                        className="select-currency"
                        onClick={handleChoiceFalse}
                      >
                        <div className="three-part-button">
                          <img
                            className="currency-icon"
                            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                          />
                          <div className="currency-call">{sellStock}</div>
                          <svg
                            viewBox="0 0 24 24"
                            color="text"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-bdnxRM guzZGW"
                          >
                            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="third-boxx">
                    <div className="arrow">
                      <div>
                        <svg
                          viewBox="0 0 24 24"
                          width="16px"
                          color="primary"
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrow-icon"
                        >
                          <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="fourth-boxx">
                    <div className="fromm">
                      <div className="fromm-letters">To</div>
                    </div>
                    <div className="amount">
                      <input
                        className="amount-input"
                        inputMode="decimal"
                        title="Token Amount"
                        type="text"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        placeholder="0.0"
                        minLength="1"
                        maxLength="79"
                      />
                      <button
                        className="select-currency"
                        onClick={handleChoiceTrue}
                      >
                        <div className="three-part-button">
                          <img
                            className="currency-icon"
                            src="https://mm.finance//images/tokens/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59.svg"
                          />
                          <div className="currency-call">{buyStock}</div>
                          <svg
                            viewBox="0 0 24 24"
                            color="text"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-bdnxRM guzZGW"
                          >
                            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="third-boxx">
                    <div className="equivalent">
                      <div className="price-equivalent">Price</div>
                      <div className="per-per">
                        <div className="swap-letter">1 BTC per USD</div>
                        <button className="switch-button">
                          <svg
                            viewBox="0 0 24 24"
                            width="14px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-bdnxRM guzZGW"
                          >
                            <path d="M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-part no-border">
                {id === undefined || id === null ? (
                  <Button setModal={setModal} modal={modal}></Button>
                ) : (
                  <button className="percent-button trade-button">Swap</button>
                )}
              </div>
            </div>
          </div>
          <div className="exchange exchange-bottom">
            <div className="box">
              <div className="extra-info">
                <div className="layer-grid">
                  <div className="layer-grid-left">Minimum Recieved</div>
                  <div className="layer-grid-right">1 USD</div>
                </div>
                <div className="layer-grid">
                  <div className="layer-grid-left">Price Impact</div>
                  <div className="layer-grid-right">0.08%</div>
                </div>
                <div className="layer-grid">
                  <div className="layer-grid-left">Transaction Fee</div>
                  <div className="layer-grid-right">0.1 USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Swap;
