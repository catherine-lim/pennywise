import React from 'react';
import GoalCard from './goal-card';
import { dailyGoal } from './helper.js';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      dailyGoalsTotal: ['dailyGoalsTotal'],
      weeklyGoalsTotal: []
    };

    this.colors = ['teal', 'pink', 'orange'];
    this.generateCards = this.generateCards.bind(this);
    // this.dailyGoalsTotal = this.dailyGoalsTotal.bind(this);
  }

  componentDidMount() {
    this.getGoals();
  }

  getGoals() {
    fetch(`/api/home.php`)
      .then(res => res.json())
      .then(response => this.setState({ goals: response }));
  }

  // dailyGoalsTotal(goalData) {

  //   dailyGoalsTotal.push(goalData);sadfsdfsddsf
  // }

  weeklyGoalsTotal() {

  }

  generateCards() {
    // var dailyGoalsTotal = [];
    const goalList = this.state.goals.map((goalData, index) => {
      return <GoalCard
        key={goalData.goal_id}
        id={goalData.goal_id}
        name={goalData.goal_name}
        completionDate={goalData.goal_completion_date}
        savingsTarget={goalData.savings_target}
        currentSavings={goalData.current_savings}
        dailyGoal={dailyGoal(goalData)}
        isCompleted={goalData.isCompleted}
        color={this.colors[index % this.colors.length]}
        // {this.dailyGoalsTotal(goalData)}
      />;
    });
    return (goalList);
  }

  render() {

    return (
      <React.Fragment>
        {this.state.dailyGoalsTotal}
        {this.generateCards()}

        <div className={`goal-card gray`}>
          <span className="goal-card-title">Completed</span>
        </div>

      </React.Fragment>
    );
  }
}
