import React from 'react';
// import GoalCard from 'goal-card';
import { dailyGoal, differenceInDays, weeklyGoal, inDollars } from './helper.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TransactionHistory from './transaction-history';

export default class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: [],
      amount_changed: '',
      goal_id: 4

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

      .then(response => this.setState({ goal: response }));
  }

  getProgress() {
    const percent = this.state.goal.current_savings / this.state.goal.savings_target;
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
        {dailyGoal(this.state.goal)}
        <div className="Day"> /day </div>
      </div>
    );
  }

  newWeeklyGoal() {
    return (
      <div className="weeklyGoal">
        {weeklyGoal(this.state.goal)}
        <div className="week">/days</div>
      </div>
    );
  }

  towardsSavings() {
    return (
      <div className="-toward-6000">
        {inDollars(this.state.goal.current_savings)} towards {''}{inDollars(this.state.goal.savings_target)}
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
      body: JSON.stringify(this.state)
    })
      .then(response => response.json());

  }

  getInputtedAmount() {
    fetch(`/api/transaction_history/goal_id=4`)
      .then(res => res.json())
    // eslint-disable-next-line no-console

      .then(response => this.setState({ amount_changed: response }));
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
        <span className="goal-card"> {this.state.goal.goal_name}</span>
      </div>
    );
  }

  getDaysRemaining() {
    return (
      <div className="daysRemaining">{differenceInDays(this.state.goal)} days</div>
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
    if (!this.state.goal.transaction_history) {
      return;
    }
    const transHistory = this.state.goal.transaction_history.map(dates => {
      return (
        <TransactionHistory
          key={dates.goal_id}
          date={dates.transaction_date}
          amount={dates.transaction_amount}
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

  getEverything() {
    return (
      <React.Fragment>
        {this.getDaysRemaining()}
        {this.getCardTitle()}
        {this.getProgress()}
        {this.towardsSavings()}
        {this.newDailyGoal()}
        {this.newWeeklyGoal()}
        {/* {this.addOrRemoveSavings()} */}
        {this.addOrRemoveButtons()}
        {this.makeTransactionHistory()}
        {this.getTransDate()}
        {this.getHistory()}

      </React.Fragment>
    );
  }

  render() {

    return (
      <React.Fragment>
        {this.getEverything()}

      </React.Fragment>
    );
  }
}
