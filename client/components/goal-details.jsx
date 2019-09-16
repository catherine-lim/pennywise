import React from 'react';
// import GoalCard from 'goal-card';
import { dailyGoal, differenceInDays, weeklyGoal, inDollars } from './helper.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TransactionHistory from './transaction-history';

export default class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      amount_changed: '',
      goal_id: props.id,
      current_savings: null,
      goal_achieved_date: null,
      goal_completting_date: null,
      goal_name: null,
      goal_start_date: null,
      is_completed: null,
      savings_target: null,
      transaction_history: null

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(props) {
    this.getGoal();
  }

  getGoal() {
    // const currentParam = this.props.params.id;
    fetch(`/api/goals.php?goal_id=4`)
      .then(res => res.json())
      // eslint-disable-next-line no-console
      .then(response => {
        this.setState({
          ...response,
          current_savings: this.getTotalSavings(response.transaction_history)
        });
      });
  }

  getProgress() {
    const percent = this.state.current_savings / this.state.savings_target;
    const now = Math.round(percent * 100);

    return (
      <div className="progressBar">
        <ProgressBar
          className="progressBar"
          striped variant="success"
          now={now}
          label={`${now}%`}
        />
      </div>
    );
  }

  newDailyGoal() {
    return (
      <div className="dailyGoal">
        {dailyGoal(this.state)}
        <div className="Day"> /day </div>
      </div>
    );
  }

  newWeeklyGoal() {
    return (
      <div className="weeklyGoal">
        {weeklyGoal(this.state)}
        <div className="week">/days</div>
      </div>
    );
  }

  towardsSavings() {
    return (
      <div className="-toward-6000">
        {inDollars(this.state.current_savings)} towards {''}
        {inDollars(this.state.savings_target)}
      </div>
    );
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.amountChange();
  }

  amountChange() {
    fetch(`/api/transaction.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount_changed: this.state.amount_changed,
        goal_id: this.state.goal_id
      })
    })
      .then(response => {
        return response.json();
      })
      .then(transaction => {
        var oldTransactionHistory = this.state.transaction_history;
        var newTransactionHistory = [
          ...oldTransactionHistory,
          transaction
        ];
        var transactionTotal = this.getTotalSavings(newTransactionHistory);

        var oldGoal = this.state;
        var updatedGoal = {
          ...oldGoal,
          current_savings: transactionTotal,
          transaction_history: newTransactionHistory
        };
        this.setState({
          goal: updatedGoal
        });
      });

  }

  getTotalSavings(transactionHistory) {

    var total = 0;
    for (var i = 0; i < transactionHistory.length; i++) {
      total += Number(transactionHistory[i].transaction_amount);
    }

    return total;
  }

  addOrRemoveButtons() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="add-or-remove-funds">
            <input
              type="text"
              name="amount_changed"
              value={this.state.amount_changed}
              onChange={this.handleChange}
              placeholder="add or remove funds"
            ></input>
            <div className="Line"></div>
          </div>
          <div className="buttonContainer">
            <button type="submit" name="submit" className="add-button">
            </button>
            <button type="submit" name="submit" className="subtract-button">
            </button>
          </div>

        </form>
      </React.Fragment>
    );
  }

  getCardTitle() {
    return (
      <div className="goal-card-title teal">
        <span className="goal-card"> {this.state.goal_name}</span>
      </div>
    );
  }

  getDaysRemaining() {
    return (
      <div className="daysRemaining">{differenceInDays(this.state)} days</div>
    );
  }

  makeTransactionHistory() {
    return (
      <div>
        <div className="Transaction-History">Transaction History</div>
        <div className="Line2"></div>
      </div>
    );
  }

  getHistory() {
    if (!this.state.transaction_history) {
      return;
    }
    const transHistory = this.state.transaction_history.map((transaction, index) => {
      return (
        <TransactionHistory
          key={index}
          date={transaction.transaction_date}
          amount={transaction.transaction_amount}
        />
      );

    });
    return (transHistory);
  }

  getTransDate() {
    return (
      <React.Fragment>
        <div className="Date">Date</div>
        <div className="Amount">Amount</div>
        <div className="Line"></div>
      </React.Fragment>
    );
  }

  render() {

    return (
      <React.Fragment>
        {this.getDaysRemaining()}
        {this.getCardTitle()}
        {this.getProgress()}
        {this.towardsSavings()}
        {this.newDailyGoal()}
        {this.newWeeklyGoal()}
        {this.addOrRemoveButtons()}
        {this.makeTransactionHistory()}
        {this.getTransDate()}
        {this.getHistory()}
      </React.Fragment>
    );
  }
}
