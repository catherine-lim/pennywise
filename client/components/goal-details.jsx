import React from 'react';

export default class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyGoal: null,
      weeklyGoal: null,
      goal: []
    };

    this.differenceInDays = this.differenceInDays.bind(this);
    // this.todaysDate = this.todaysDate.bind(this);
    // this.dailyGoal = this.dailyGoal.bind(this);

  }

  // componentDidMount() {
  // this.todaysDate();
  // this.dailyGoal();

  //   // eslint-disable-next-line no-console
  //   console.log(this.differenceInDays());
  // }

  componentDidMount(props) {
    // const currentParam = this.props.params.id;
    fetch(`/api/goals.php?goal_id=3`)
      .then(res => res.json())
      // eslint-disable-next-line no-console

      .then(response => this.setState({ goal: response }));

  }

  dailyGoal(goalData, index) {
    const daysLeft = this.differenceInDays();
    const target = this.state.goal.savings_target;
    const currentSaved = this.state.goal.current_saving;
    const amountLeftToSave =
      target - currentSaved;
    const dailyGoal = amountLeftToSave / daysLeft;
    this.setState({ dailyGoal: this.inDollars(dailyGoal) });
    const daysToWeeks = daysLeft / 7;
    const weeklyGoal = amountLeftToSave / daysToWeeks.toFixed(1);
    this.setState({ weeklyGoal: this.inDollars(weeklyGoal) });
  }

  todaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    // eslint-disable-next-line no-console

    return (today);
  }

  differenceInDays(index) {
    const todayDate = new Date(this.todaysDate());
    var goalDate = new Date(
      this.state.goal.goal_completion_date
    );

    var MS_IN_A_DAY = 86400000;
    var todayDateInMS = Date.UTC(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    );
    var goalDateInMS = Date.UTC(
      goalDate.getFullYear(),
      goalDate.getMonth(),
      goalDate.getDate()
    );
    // eslint-disable-next-line no-console

    return Math.floor(
      (goalDateInMS - todayDateInMS) / MS_IN_A_DAY
    );
  }

  inDollars(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value / 100);
  }

  render() {

    const goal = this.state.goal;
    return (
      <React.Fragment>
        <div className="daysRemaining">{this.differenceInDays()} <span className="Days">days</span> </div>
        <div className="goal-card teal"><span className="goal-card-title">{goal.goal_name}</span></div>
        <div className="-toward-6000">
          {this.state.goal.current_saving} towards {goal.savings_target}
        </div>
        <div>
          <div className="dailyGoal">{goal.dailyGoal} </div>
          <div className="day">/day</div>
        </div>
        <div>
          <div className="weeklyGoal">{goal.weeklyGoal}</div>
          <div className="week">/week</div>
        </div>
      </React.Fragment>
    );
  }
}
