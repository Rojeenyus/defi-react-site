import React from "react";
import "./History.css";
import { AiFillCheckCircle } from "react-icons/ai";

function History() {
  return (
    <div className="history">
      <div className="c-activity-list__item">
        <div className="c-activity-list__date">
          <div className="c-activity-list__month">Aug</div>
          <div className="c-activity-list__day">12</div>
        </div>
        <div className="c-activity-list__meta">
          <div className="c-activity-list__title">
            <span className="c-activity-list__subtitle red">-10 USD</span>
          </div>
          <div className="c-activity-list__message green">+10 BTC</div>
        </div>
        <div className="c-activity-list__amount is-outgoing">
          <AiFillCheckCircle style={{ fill: "#00FF00", fontSize: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
}

export default History;
