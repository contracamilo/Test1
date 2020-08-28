moment.locale('es');
function Filters ({ setStarDate, setEndDate, startDate, endDate}) {

    return (
      <nav className="navbar is-container">
        <div className="container is-widescreen">
          <div className="notification">
            <div className="field">
            <h3 className="subtitle">
            <span>desde el <b>{startDate}</b> hasta el <b>{endDate}</b></span>
            </h3>
            <input className="input" type="date" 
              onChange={(event) => {
                console.log(event.target.value);
              setStarDate(moment(event.target.value, "YY/MMMM/DD"))
                } 
              }/>
            <span className="icon is-small is-left">
              <i className="fas"></i>
            </span>
            </div>
            <div className="field">
            <input className="input" type="date" 
            onChange={(event) => {
              console.log(event.target.value);
            setEndDate(moment(event.target.value, "YY/MMMM/DD"))
              } 
            }/>
            <span className="icon is-small is-left">
              <i className="fas"></i>
            </span>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <div className="select" style={{ width: '100%' }}>
                  <select style={{ width: '100%' }}>
                  </select>
                </div>
                  <div className="icon is-small is-left">
                  <i className="fas"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
