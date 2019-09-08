import React from 'react';
import GoalCard from './goal-card';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goals: [
        {
          'id': 1,
          'name': 'Santorini Trip',
          'dailyGoal': 1043,
          'isCompleted': false
        },
        {
          'id': 2,
          'name': 'Macbook Pro',
          'dailyGoal': 950,
          'isCompleted': false
        },
        {
          'id': 3,
          'name': 'Suit for Work',
          'dailyGoal': 786,
          'isCompleted': false
        }
      ]
    };
  }

  inDollars(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value / 100);
  }

  render() {
    const goalList = this.state.goals.map(goalData => {
      return (
        <GoalCard key={goalData.id}
          id={goalData.id}
          name={goalData.name}
          dailyGoal={this.inDollars(goalData.dailyGoal)}
          isCompleted={goalData.isCompleted}
        />
      );
    });
    return (
      <React.Fragment>
        {goalList}
      </React.Fragment>
    );
  }
}

// renderView() {
//   switch (this.state.goals.id % 3) {
//     case '0':
//       return (
//         <ProductList
//           setView={this.setView} />
//       );

//     case '1':
//       return (
//         <ProductDetails
//           id={this.state.view.params.id}
//           setView={this.setView}
//           addToCart={this.addToCart} />
//       );

//     case '2':
//       return (
//         <CartSummary
//           cartArray={this.state.cart}
//           view={this.setView} />
//       );
//   }
// }
