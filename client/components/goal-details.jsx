import React from 'react';
// import GoalCard from 'goal-card';
import { dailyGoal, differenceInDays, weeklyGoal, inDollars } from './helper.js';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: []
    };
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
          variant="success"
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
        <div className="day"> /day </div>
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
        {inDollars(this.state.goal.current_savings)} toward
        {inDollars(this.state.goal.savings_target)}
      </div>
    );
  }

  addOrRemoveSavings() {
    return (
      <div className="add-or-remove-funds">
        <input type="text mt-5" placeholder="add or remove funds"></input>
        <div className="Line"></div>
      </div>
    );
  }

  addOrRemoveButtons() {
    return (
      <div className="container">
        <div className="row">
          <div className="add-button"></div>
          <div className="subtract-button"></div>
        </div>
      </div>
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
        <div className="transaction-history">Transaction History</div>
        <div className="Line2"></div>
      </div>
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
        {this.addOrRemoveSavings()}
        {this.addOrRemoveButtons()}
        {this.makeTransactionHistory()}
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
