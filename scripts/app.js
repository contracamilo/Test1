moment.locale ('es');
class App extends React.Component {

  constructor(props) {
    super(props);

    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
  }

  state = {
    filter: {
      startDate: moment().format('YY/MMMM/DD'),
      endDate: moment().add (1, 'days').format('YY/MMMM/DD'),
      country: '',
      prices: '',
    },
    hotelesData: hotelsData,
  };


  setStartDate(newDate) {
    this.setState ({
      filter: {
        startDate: newDate,
        endDate: this.state.filter.endDate
        
      },
      ...this.state,
    });
  }

  setEndDate(newDate) {
    this.setState ({
      filter: {
        startDate: this.state.filter.startDate,
        endDate: newDate,
      },
      ...this.state,
    });
  }

  render () {
    console.log (this.state);
    // console.log(this.state.hotelesData);
    return (
      <div>

        <Header />
        <Filters
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
          startDate={this.state.filter.startDate}
          endDate={this.state.filter.endDate}
        />
        <Hoteles hoteles={this.state.hotelesData} />
      </div>
    );
  }
}

ReactDOM.render (<App />, document.getElementById ('app'));