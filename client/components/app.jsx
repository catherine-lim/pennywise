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

  }
  setView(name, params) {
    this.setState({ view: {
      name: name,
      params: params
    } });
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
          <CreateGoal setView={this.setView} saveGoal={this.props.saveGoal}/>
        </React.Fragment>
      );
    }
  }
}
