import './Calendar.css';
import Header from './Header';
import Month from './Month';

function Calendar(props) {
  return (
    <div className="container">
      <Header
        currentDate={props.currentDate}
      />
      <Month
        currentDate={props.currentDate}
      />
    </div>
  );
}

function addReminder(reminder) {
  //Adding reminder
}

export default Calendar;