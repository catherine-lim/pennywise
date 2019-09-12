import React from 'react';
import GoalCard from './goal-card';
import { dailyGoal } from './helper.js';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };

    this.colors = ['teal', 'pink', 'orange'];
    // this.differenceInDays = this.differenceInDays.bind(this);
    // this.dailyGoal = this.dailyGoal.bind(this);
    this.generateCards = this.generateCards.bind(this);
  }

  componentDidMount() {
    this.getGoals();
  }

  getGoals() {
    fetch(`/api/home.php`)
      .then(res => res.json())
      .then(response => this.setState({ goals: response }));
  }

  generateCards() {
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
        color={this.colors[index % this.colors.length]}/>;
    });
    return (goalList);
  }

  render() {

    return (
      <React.Fragment>

        {this.generateCards()}

        <div className={`goal-card gray`}>
          <span className="goal-card-title">Completed</span>
        </div>

      </React.Fragment>
    );
  }
}
