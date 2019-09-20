import React from 'react';
import GoalCard from './goal-card';
import { dailyGoal, inDollars } from './helper.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      dailyGoalsTotal: ['dailyGoalsTotal'],
      weeklyGoalsTotal: []
    };

    this.colors = ['teal', 'pink', 'orange'];
  }

  componentDidMount() {
    this.getGoals();
  }

  getGoals() {
    fetch(`/api/home.php`)
      .then(res => res.json())
      .then(response => this.setState({ goals: response }));
  }

  dailyGoalsTotal(i) {
    var dailyGoalsArray = [];
    for (i in this.state.goals) {
      dailyGoalsArray.push(dailyGoal(this.state.goals[i]));
    }
    return dailyGoalsArray.reduce((a, b) => a + b, 0);
  }

  weeklyGoalsTotal(i) {

    var weeklyGoals = this.dailyGoalsTotal() * 7;

    return weeklyGoals;

  }

  generateCards() {

    const goalList = this.state.goals.map((goalData, index) => {

      return (
        <GoalCard
          key={goalData.goal_id}
          id={goalData.goal_id}
          name={goalData.goal_name}
          completionDate={goalData.goal_completion_date}
          savingsTarget={goalData.savings_target}
          currentSavings={goalData.current_savings}
          dailyGoal={inDollars(dailyGoal(goalData))}
          color={this.colors[index % this.colors.length]}
          setView={this.props.setView}
        />
      );

    });
    return goalList;
  }

  render() {
    return (
      <React.Fragment>
        <div className="card-container">
          <div className="goals-row">

            <div className="goals-total-container">
              <div className="daily-totals-text">
                {inDollars(this.dailyGoalsTotal())}
              </div>
              <div className="per-day-text">
                /day
              </div>
            </div>

            <div className="goals-total-container">
              <div className="weekly-totals-text">
                {inDollars(this.weeklyGoalsTotal())}
              </div>
              <div className="per-week-text">
              /week
              </div>
            </div>

          </div>

          {/* <div className="goals-total-container">
            <div className="daily-goals-total">
              <div className="weekly-goals-text-justify">
                <span className="daily-totals-text">{inDollars(this.weeklyGoalsTotal())}</span><br />
                <span className="per-day-text">/week</span>
              </div>
            </div>
          </div>

        </div> */}

          <div
            className="new-goal-button"
            onClick={props =>
              this.props.setView('creategoal', { goal_id: props.id })}>
            <span className="new-goal-text">New Goal</span>
          </div>

          {this.generateCards()}
        </div>

      </React.Fragment>
    );
  }
}
