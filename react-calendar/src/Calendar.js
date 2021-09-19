import './Calendar.css';
import Month from './Month';

function Calendar() {
  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <Month month=Date.prototype.getMonth() />
      </header>
    </div>
  );
}

function addReminder(reminder) {
  //Adding reminder
}

export default Calendar;
