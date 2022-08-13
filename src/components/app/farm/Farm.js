import React from "react";
import "./Farm.css";

function Farm() {
  return (
    <div className="second-padding">
      <div className="table-container">
        <table className="farm-table">
          <tbody>
            <tr className="tr-box">
              <td>
                <div className="padding-all">
                  <div className="first-boxs">
                    <div className="first-boxxs">
                      <div className="two-icons">
                        <img
                          className="icon"
                          src="https://clipart.world/wp-content/uploads/2020/09/sunflower-clipart-transparent.png"
                        />
                        <img
                          className="icon"
                          src="https://mm.finance//images/tokens/0xc21223249CA28397B4B6541dfFaEcC539BfF0c59.svg"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="icon-name">SUN-USDC</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="padding-all">
                  <div>
                    <div className="top-header">Earned</div>
                    <div className="bottom-number">
                      <span className="span-number">0.002</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="padding-all">
                  <div>
                    <div className="top-header">APR</div>
                    <div className="bottom-number">
                      <span className="span-number">365%</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="no-display">
                <div className="padding-all">
                  <div>
                    <div className="top-header">Liquidity</div>
                    <div className="bottom-number">
                      <span className="span-number">$65,265,000</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="no-display">
                <div className="padding-all">
                  <div>
                    <div className="top-header">Multiplier</div>
                    <div className="bottom-number">
                      <span className="span-number">55x</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="padding-all">
                  <div className="arrow">
                    <svg
                      viewBox="0 0 24 24"
                      color="text"
                      className="arrow-icon"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="tr-box">
              <td colSpan="6" className="colspan1">
                <div className="padding-show">
                  <div className="padding-query">
                    <div className="additional-query">
                      <div className="top-header">Liquidity</div>
                      <div className="bottom-number">
                        <span className="span-number">$65,265,000</span>
                      </div>
                    </div>
                    <div className="additional-query">
                      <div className="top-header">Multiplier</div>
                      <div className="bottom-number">
                        <span className="span-number">55x</span>
                      </div>
                    </div>
                  </div>
                  <div className="left-hyperlinks">
                    <a href="" className="href-links">
                      GET SUN-USDC LP
                      <svg
                        viewBox="0 0 24 24"
                        color="primary"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="go-to"
                      >
                        <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                      </svg>
                    </a>
                    <a href="" className="href-links">
                      VIEW CONTRACT
                      <svg
                        viewBox="0 0 24 24"
                        color="primary"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="go-to"
                      >
                        <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                      </svg>
                    </a>
                    <a href="" className="href-links">
                      SEE PAIR INFO
                      <svg
                        viewBox="0 0 24 24"
                        color="primary"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="go-to"
                      >
                        <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="double-box">
                    <div className="first-double-box">
                      <div className="double-box-top">SUN EARNED</div>
                      <div className="double-box-bottom">
                        <div>
                          <h2 className="earned">0.002</h2>
                          <div className="earned-dollar">~$0.02</div>
                        </div>
                        <button className="connect-button">Harvest</button>
                      </div>
                    </div>
                    <div className="first-double-box">
                      <div className="double-box-top">SUN-USDC LP STAKED</div>
                      <div className="double-box-bottom">
                        <div>
                          <h2 className="earned">.00000298</h2>
                          <div className="earned-dollar">~$2.02</div>
                        </div>
                        <div className="plus-minus">
                          <button className="plus-button">-</button>
                          <button className="plus-button">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Farm;
