function Month(props) {
    const noDays = daysInMonth(props);
    var firstDay = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), +1);
    var lastDay = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()+1, 0);

    // Workaround for javascript using a 0 based index for days where sunday is 0
    if (firstDay === 0) {
        firstDay = 7;
    }

    if (lastDay === 0) {
        lastDay = 7;
    }

    var trueFirst = new Date(firstDay.valueOf() - (86400000 * (firstDay.getDay() - 1)));
    const totalDays = noDays + (firstDay.getDay() - 1) + (7 - lastDay.getDay());

    const daysArray = [];
    for (let dayIter = 0; dayIter < totalDays; dayIter++) {
        daysArray.push(new Date(trueFirst.valueOf() + (86400000 * dayIter)).getDate());
    }

    const week1Array = daysArray.slice(0,7);
    const week2Array = daysArray.slice(7,14);
    const week3Array = daysArray.slice(14,21);
    const week4Array = daysArray.slice(21,28);
    const week5Array = daysArray.slice(28,35);


    const week1 = week1Array.map((day) =>
        <div className="col border border-dark border-2 text-center">
            {day}
        </div>
    );

    const week2 = week2Array.map((day) =>
        <div className="col border border-dark border-2 text-center">
            {day}
        </div>
    );

    const week3 = week3Array.map((day) =>
        <div className="col border border-dark border-2 text-center">
            {day}
        </div>
    );

    const week4 = week4Array.map((day) =>
        <div className="col border border-dark border-2 text-center">
            {day}
        </div>
    );

    const week5 = week5Array.map((day) =>
        <div className="col border border-dark border-2 text-center">
            {day}
        </div>
    );

    return(
        <div className="row Month">
            <div className="row monthHeader">
                <div className="col border border-dark border-2">Monday</div>
                <div className="col border border-dark border-2">Tuesday</div>
                <div className="col border border-dark border-2">Wednesday</div>
                <div className="col border border-dark border-2">Thursday</div>
                <div className="col border border-dark border-2">Friday</div>
                <div className="col border border-dark border-2">Saturday</div>
                <div className="col border border-dark border-2">Sunday</div>
            </div>
            { /*for each day in month, render day box */}
            <div className="row">
                {week1}
            </div> 
            <div className="row">
                {week2}
            </div>
            <div className="row">
                {week3}
            </div> 
            <div className="row">
                {week4}
            </div> 
            <div className="row">
                {week5}
            </div> 

        </div>
    );
}

// function sourced from: https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
function daysInMonth (props) {
    return new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()+1, 0).getDate();
}

export default Month;