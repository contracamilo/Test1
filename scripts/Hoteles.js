function Hoteles(props) {
  // console.log(props);

  return (
    <div className="columns is-wrap">
      {props.hoteles.map((hotel, i) =>
        <Hotel
        {...hotel}
        />
      )
      }
    </div>
  )
}