import React from 'react';
import './Calendar.css';
import Month from './Month';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentDate: new Date()};

    this.changeDate = this.changeDate.bind(this);
  }

  changeDate(newDate) {
    this.setState({
      currentDate: newDate
    });
  }

  render() {
    const previousMonth = new Date(this.state.currentDate.valueOf() - 2629800000);
    const nextMonth = new Date(this.state.currentDate.valueOf() + 2629800000);
      
    const previousYear = new Date(this.state.currentDate.valueOf() - 31557600000);
    const nextYear = new Date(this.state.currentDate.valueOf() + 31557600000);

    return (
      <div className="container">
        <header className="row my-4">
          <div className="col col-lg-6">
            <div className="row">
              <div className="col-4 btn-group" role="group" aria-label="Month selection group">
                  <button type="button" className="btn btn-dark col-2 text-end" onClick={() => this.changeDate(previousMonth)}>&lt; { /* Button to change to previous month*/ }</button>
                  <button type="button" className="btn btn-dark col-8 text-center">{new Intl.DateTimeFormat('en-UK', {month:'long'}).format(this.state.currentDate)}</button>
                  <button type="button" className="btn btn-dark col-2 text-start" onClick={() => this.changeDate(nextMonth)}>&gt; { /* Button to change to next month*/ }</button>
              </div>
              <div className="col-3 btn-group" role="group" aria-label="Year selection group">
                  <button type="button" className="btn btn-dark col-1 text-end" onClick={() => this.changeDate(previousYear)}>&lt; { /* Button to change to previous year*/ }</button>
                  <button type="button" className="btn btn-dark col-5 text-center">{this.state.currentDate.getFullYear()}</button>
                  <button type="button" className="btn btn-dark col-1 text-start" onClick={() => this.changeDate(nextYear)}>&gt; { /* Button to change to next year*/ }</button>
              </div>
            </div>
          </div>
      </header>

      <Month
        currentDate={this.state.currentDate}
      />
      </div>
    );
  }
}

export default Calendar;