moment.locale('es');
function Filters ({startDate, endDate}) {

    return (
      <nav className="navbar is-container">
        <div className="container is-widescreen">
          <div className="notification">
            <div className="field">
            <input className="input" type="date" 
              onChange={(event) => {
                console.log(event.target.value);
              startDate(moment(event.target.value, "YY/MMMM/DD"))
              console.log("show date", startDate);
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
            endDate(moment(event.target.value, "YY/MMMM/DD"))
            console.log("show date", Date);
              } 
            }/>
            <span className="icon is-small is-left">
              <i className="fas"></i>
            </span>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <div className="select" >
                  <select>
                   
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
