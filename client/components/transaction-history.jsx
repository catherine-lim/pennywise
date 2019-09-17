import React from 'react';
import {
  inDollars
} from './helper.js';

export default function TransactionHistory(props) {

  return (
    <React.Fragment>
      <div className="transContainer">

        <span className="trans-card-title">{props.date}</span>
        <span className="trans-amount">{inDollars(props.amount)}</span>

      </div>

    </React.Fragment>
  );
}
