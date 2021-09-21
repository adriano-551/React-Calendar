function Header(props) {
    return (
        <header className="row">
            <div className="col col-lg-6">
            <div className="row">
                <div className="col-4">
                <div className="row">
                    <a className="col col-sm-auto text-end">&lt; { /* Button to change to previous month*/ }</a>
                    <span className="col col-sm-auto text-center">{new Intl.DateTimeFormat('en-UK', {month:'long'}).format(props.currentDate)}</span>
                    <a className="col col-sm-auto text-start">&gt; { /* Button to change to next month*/ }</a>
                </div>
                </div>
                <div className="col-4">
                <div className="row">
                    <a className="col col-sm-auto text-end">&lt; { /* Button to change to previous year*/ }</a>
                    <span className="col col-sm-auto text-center">{props.currentDate.getFullYear()}</span>
                    <a className="col col-sm-auto text-start">&gt; { /* Button to change to next year*/ }</a>
                </div>
                </div>
            </div>
            </div>
            <div className="col col-lg-6 text-end">Date selector</div>
        </header>
    );
}

export default Header;