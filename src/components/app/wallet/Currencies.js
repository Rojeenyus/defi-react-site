import React, { useEffect, useState } from "react";
import "./Currencies.css";
import axios from "axios";

function Currencies({ transactions }) {
  let [data, setData] = useState({});
  let [myWallet, setMyWallet] = useState([]);
  let [myCurrencies, setMyCurrencies] = useState([]);
  const urlstock = "https://ancient-beyond-96499.herokuapp.com/stocks";
  let whole = {};

  let singelData = (currency, amount) => {
    let myallet = {
      currency: currency,
      amount: amount,
    };
  };

  let pushData = (x) => {
    setMyWallet((data) => {
      return [x, ...data];
    });
  };

  let complete = (myCurrencies) => {};

  useEffect(async () => {
    let filteredbuy = [...new Set(transactions.map((item) => item.stock_id))];
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    var unique = filteredbuy.filter(onlyUnique);
    console.log(unique);

    let headers = {
      headers: {
        "Content-Type": "Application/json",
      },
    };

    try {
      const response = await axios.get(urlstock, headers);
      setData(response.data);
      let result = response.data;
      let currencyName = unique.map((x) => {
        return result.find(({ id }) => {
          return id === x;
        }).name;
      });
      setMyCurrencies(currencyName);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return (
    <>
      <div className="css-uq1pv2">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="wallet"
          className="svg-inline--fa fa-wallet fa-lg "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"
          ></path>
        </svg>
        <span className="css-lfnbsw">Account Balances</span>
        <div className="css-1iyhun0">
          <div className="css-1n0b3ga">
            <div className="css-6550wj">
              <img
                className="currency-icon"
                src="https://mm.finance//images/tokens/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59.svg"
              />
              USD
            </div>
          </div>
          <div className="css-rfpnma">
            <span className="css-1lxfzdv">
              {sessionStorage.getItem("money")}
            </span>
          </div>
        </div>
        {myCurrencies.map((currency) => {
          return (
            <div className="css-1iyhun0">
              <div className="css-1n0b3ga">
                <div className="css-6550wj">
                  <img
                    className="currency-icon"
                    src="https://mm.finance//images/tokens/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59.svg"
                  />
                  {currency}
                </div>
              </div>
              <div className="css-rfpnma">
                <span className="css-1lxfzdv">{0}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Currencies;
