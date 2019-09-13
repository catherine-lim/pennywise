import React from 'react';

export default function TransactionHistory(props) {

  return (
    <React.Fragment>
      <div className="transContainer">

        <span className="trans-card-title">{props.date}</span>
        <span className="trans-amount">{props.amount}</span>

      </div>

    </React.Fragment>
  );
}
