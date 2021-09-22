import React from 'react';
import './Calendar.css';
import Header from './Header';
import Month from './Month';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentDate: new Date()};
  }

  render() {
    return (
      <div className="container">
        <Header
          currentDate={this.state.currentDate}
        />
        <Month
          currentDate={this.state.currentDate}
        />
      </div>
    );
  }

  changeDate(newDate) {
    this.setState({
      currentDate: newDate
    });
  }
}

function addReminder(reminder) {
  //Adding reminder
}


function changeTime(newTime) {
  // Function to change month
  //<Calendar currentDate={currentDate} />
}

export default Calendar;