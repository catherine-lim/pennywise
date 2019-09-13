import React from 'react';

function Onboarding(props) {
  return (
    <React.Fragment>
      <div className="onBoarding">
        <p className="someStatement">Save More Buy More.</p>

        <p className="secondStatement"> Save Money for the things you want</p>

        <p className="getStartedNow">Get Started Now</p>

        <button className="getStartedButton"
          onClick={() => props.setView('goalform', {})}> <p>Get Started</p> </button>
      </div>
    </React.Fragment>
  );

}

export default Onboarding;
