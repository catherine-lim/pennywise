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
      ],
      colorLoop: {
        'teal': 'pink',
        'pink': 'orange',
        'orange': 'teal'
      }
    };
  }

  inDollars(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value / 100);
  }

  render() {
    this.currentColor = 'teal';
    const goalList = this.state.goals.map(goalData => {
      this.goalCard = <GoalCard
        key={goalData.id}
        id={goalData.id}
        name={goalData.name}
        dailyGoal={this.inDollars(goalData.dailyGoal)}
        isCompleted={goalData.isCompleted}
        colorClass={this.currentColor}/>;
      this.currentColor = this.state.colorLoop[this.currentColor];

      return (
        this.goalCard
      );
    });

    return (
      <React.Fragment>

        {goalList}

        <div className={`goal-card gray`}>
          <span className="gc-title">Completed</span>
        </div>

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

// colorClass: ['teal',
//   'pink',
//   'orange'],
