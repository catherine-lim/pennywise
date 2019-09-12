import React from 'react';
import GoalCard from 'goal-card';
import { dailyGoal } from './helper.js';

export default class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: []
    };
    this.getGoal = this.getGoal.bind(this);

  }

  componentDidMount(props) {
    this.getGoal();
  }

  // getDayRemaining() {
  //   var days = differenceInDays(this.state.goal);
  // }

  getGoal() {
    // const currentParam = this.props.params.id;
    fetch(`/api/goals.php?goal_id=3`)
      .then(res => res.json())
    // eslint-disable-next-line no-console
      .then(response => this.setState({ goal: response }));
  }

  render(goalData) {
    return (
      <React.Fragment>
        return <GoalCard
          key={goalData.goal_id}
          id={goalData.goal_id}
          name={goalData.goal_name}
          completionDate={goalData.goal_completion_date}
          savingsTarget={goalData.savings_target}
          currentSavings={goalData.current_savings}
          dailyGoal={dailyGoal(goalData)}
          isCompleted={goalData.isCompleted}/>

      </React.Fragment>
    );
  }
}
