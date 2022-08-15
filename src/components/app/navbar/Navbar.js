import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Button from "./Button";
import Wallet from "./../wallet/Wallet";
import Cookies from "js-cookie";

const Navbar = ({
  setClick,
  click,
  id,
  setId,
  modal,
  setModal,
  email,
  setEmail,
}) => {
  let location = useLocation();
  let [active, setActive] = useState(location.pathname);
  let [signIn, setSignIn] = useState(true);
  let [wallet, setWallet] = useState(false);
  let [transactions, setTransactions] = useState({
    buy: [{ stock_id: 0 }],
    sell: [{ stock_id: 0 }],
  });
  let urltransaction =
    "https://ancient-beyond-96499.herokuapp.com/transactions";

  const handleClick = () => setClick(!click);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  let handleWallet = async (e) => {
    e.preventDefault();
    setWallet(!wallet);

    let headers = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `JWT ${Cookies.get("auth")}`,
      },
    };

    try {
      const response = await axios.get(urltransaction, headers);
      setTransactions(response.data.data.transactions);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {wallet ? (
        <Wallet
          setWallet={setWallet}
          wallet={wallet}
          transactions={transactions}
        />
      ) : (
        ""
      )}
      {signIn ? (
        <>
          {modal ? (
            <Login
              setSignIn={setSignIn}
              signIn={signIn}
              modal={modal}
              setModal={setModal}
              id={id}
              setId={setId}
              email={email}
              setEmail={setEmail}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {modal ? (
            <Signup
              setSignIn={setSignIn}
              signIn={signIn}
              modal={modal}
              setModal={setModal}
              id={id}
              setId={setId}
              setEmail={setEmail}
              email={email}
            />
          ) : (
            ""
          )}
        </>
      )}
      <div className="navbar">
        <div className="container containers">
          <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>Defi</h1>
          <ul className="navs">
            <li className="nav-item">
              {active === "/dex" || active === "/dex/swap" ? (
                <Link to="swap" className="active">
                  Swap
                </Link>
              ) : (
                <Link to="swap">Swap</Link>
              )}
            </li>
            <li className="nav-item">
              <a href="/">Pool</a>
            </li>
            <li className="nav-item">
              {active === "/dex/farm" ? (
                <Link to="farm" className="active">
                  Farm
                </Link>
              ) : (
                <Link to="farm">Farm</Link>
              )}
            </li>
            <li className="nav-item">
              <a href="/">IDO</a>
            </li>
          </ul>
          <div className="nav-item nav-button">
            {id === undefined || id === null ? (
              <Button setModal={setModal} modal={modal}></Button>
            ) : (
              <button
                className="percent-button trade-button"
                onClick={handleWallet}
              >
                {sessionStorage.getItem("email")}
              </button>
            )}
          </div>
          <div onClick={handleClick} className="hamburger">
            {click ? (
              <AiOutlineClose className="icon" />
            ) : (
              <AiOutlineMenu className="icon" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
