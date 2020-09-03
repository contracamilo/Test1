function Hoteles(props) {
  // console.log(props);

  return (
    <div className="columns is-wrap is-grouped is-grouped-multiline">
      {props.hoteles.map((hotel, i) =>
        <Hotel
        {...hotel}
        />
      )
      }
    </div>
  )
}