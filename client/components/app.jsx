import React from 'react';
import Header from './header';
// import Home from './home';
import GoalDetails from './goal-details';

export default class App extends React.Component {

  render() {
    return (

      <React.Fragment>

        <Header/>
        {/* <Home/> */}
        <GoalDetails/>

      </React.Fragment>

    );
  }
}
