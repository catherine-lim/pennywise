import React from 'react';
import Header from './header';
// import Home from './home';
import GoalDetails from './goal-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: [],
      view: {
        name: 'home',
        params: {}
      }
    };
  }

  // componentDidMount() {
  //   this.getGoals();
  // }

  // getGoals() {
  //   fetch(`/api/goals.php`)
  //     .then(res => res.json())
  //     .then(response => this.setState({ goal: response }));
  // }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {

    // if (this.state.view.name === 'home') {
    //   return (
    //     <React.Fragment>
    //       <Header />
    //       <Home
    //         setView = {this.setView}
    //       />
    //     </React.Fragment>
    //   );
    // } else if (this.state.view.name === 'details') {
    return (
      <React.Fragment>
        <Header />
        <GoalDetails
          setView = {this.setView}
          params = {this.state.view.params}
        />
      </React.Fragment>
    );
    // }
  }
}
