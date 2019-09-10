import React from 'react';

export default class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: null
    };
  }

  componentDidMount(props) {
    const currentParam = this.props.params.id;
    fetch(`/api/goals.php?id=` + currentParam)
      .then(res => res.json())
      .then(response => this.setState({ product: response }));
  }

  render() {
    return <h1>Hello World</h1>;
  }
}
