moment.locale('es');
class App extends React.Component {
   initialState = {
    filter: {
      startDate: moment().format("DD/MMMM/YY"),
      endDate: moment().add(1,'days').format("DD/MMMM/YY"),
      country:"",
      prices:"",
      rooms:""
    },
    hotelesData: hotelsData
   }
  constructor(props){
  super(props);
  this.state = this.initialState;

}
 setStarDate(date){
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
    return (
      <div>
        <Header  
          startDate={this.state.filter.startDate}
          endDate={this.state.filter.endDate} 
          />
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





