import React from 'react';
import Header from './header';
import Onboarding from './onboarding';
import CreateGoal from './create-goal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'onboarding',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.saveGoalToDetail = this.saveGoalToDetail.bind(this);
  }
  setView(name, params) {
    this.setState({ view: {
      name: name,
      params: params
    } });
  }
  saveGoalToDetail() {
    fetch('/api/goals.php', {
      method: 'POST',
      body: JSON.stringify(),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => this.setState({ view: {
        name: 'onboarding',
        params: {}
      } }));
  }

  render() {
    if (this.state.view.name === 'onboarding') {
      return (
        <React.Fragment>
          <Header setView={this.setView}/>
          <Onboarding setView={this.setView}/>
        </React.Fragment>
      );
    } else if (this.state.view.name === 'goalform') {
      return (
        <React.Fragment>
          <Header setView={this.setView}/>
          <CreateGoal setView={this.setView} saveGoal={this.saveGoalToDetail}/>
        </React.Fragment>
      );
    }
  }
}
