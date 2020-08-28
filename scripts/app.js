moment.locale('es');
class App extends React.Component {
   initialState = {
    filter: {
      startDate: moment().format("YY/MMMM/DD"),
      endDate: moment().add(1,'days').format("YY/MMMM/DD"),
      country:"",
      prices:""
    },
    hotelesData: hotelsData
   }
  constructor(props){
  super(props);
  this.state = this.initialState;
  // this.setStartDate = this.setStartDate.bind(this);
  // this.setEndDate = this.setEndDate.bind(this);
}
 setStarDate(date){
  console.log(date);
  this.setState((state) => ({
    ...state,
    startDate: date
  }));
 }

 setEndDate(date){
  this.setState((state) => ({
    ...state,
    endDate: date
  }));
}

  render() {
    // console.log(this.state);
    // console.log(this.state.hotelesData);
    return (
      <div>
        <Header />
        <Filters 
          setStarDate={() => this.setStarDate()}
          setEndDate={() => this.setEndDate()}
          startDate={this.state.filter.startDate} 
          endDate={this.state.filter.endDate} 
        />
        <Hoteles hoteles={this.state.hotelesData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))





