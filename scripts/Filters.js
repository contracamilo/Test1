moment.locale ('es');
function Filters({setStartDate, setEndDate, startDate, endDate}) {
  return (
    <nav className="navbar is-container">
      <div className="container is-widescreen">
        <div className="notification">
          <div className="field">
            <h3 className="subtitle">
              <span>desde el <b>{startDate}</b> hasta el <b>{endDate}</b></span>
            </h3>
            <input
              className="input"
              type="date"
              onChange={event => {
                let date = moment(event.target.value).format('YY/MMMM/DD');
                setStartDate(date);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas" />
            </span>
          </div>
          <div className="field">
            <input
              className="input"
              type="date"
              onChange={event => {
                let date = moment(event.target.value).format('YY/MMMM/DD');
                setEndDate(date);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas" />
            </span>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <div className="select" style={{width: '100%'}}>
                <select style={{width: '100%'}} />
              </div>
              <div className="icon is-small is-left">
                <i className="fas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
