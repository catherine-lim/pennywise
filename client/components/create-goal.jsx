import React from 'react';

export default class CreateGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Goal_Name: '',
      Savings_Target: '',
      Current_Saving: '',
      Goal_Completion_Date: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  saveGoal() {
    fetch('/api/create-goal.php', {
      method: 'POST',
      body: JSON.stringify({
        goal_name: this.state.Goal_Name,
        savings_target: this.state.Savings_Target,
        current_saving: this.state.Current_Saving,
        goal_completion_date: this.state.Goal_Completion_Date
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());

  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">

            <label className="secondStatement">What are you saving for ?</label>
            <br></br>
            <input type="text" name="goal"onChange={this.handleChange} id="goal" className="form-control" placeholder="Example : Computer" />
          </div>

          <div className="form-group">
            <label className="secondStatement">How much does it cost?</label>
            <br></br>
            <input type="text" name="cost" onChange={this.handleChange} id="cost" className="form-control" placeholder="100" />
          </div>

          <div className="form-group">
            <label className="secondStatement">How much are you starting with?</label>
            <br></br>
            <input type="text" name="initialMoney" onChange={this.handleChange} id="initialMoney" className="form-control" placeholder="10" />
          </div>

          <div className="form-group">
            <label className="secondStatement">When do you need it by?</label>
            <br></br>
            <input type="date" name="dayLeft" onChange={this.handleChange} id="dayLeft" className="form-control" />
          </div>

        </form>

        <button type="submit" className="saveGoalButton"
          onClick={() => this.props.setView('home', {})}> <p>Save</p> </button>

      </React.Fragment>
    );
  }
}
