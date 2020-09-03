function Hotel(props) {
    let moneyIcons = []
    for (var i = 0; i < 4; i++) {
        var style = {
            margin: '0 .125em'
        }
        if (i >= props.price) {
            style.opacity = '0.25'
        }
        moneyIcons.push(
            <i className="fas fa-dollar-sign"
                style={style}
                key={i}>
            </i>
        )
    };

    return (

        <div className="card column is-one-third-desktop is-half-tablet" >
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.photo} alt={props.slug} />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{props.name}</p>
                <p>{props.description}</p>
                <div className="field is-grouped is-grouped-multiline">
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-clear has-text-grey"><i className="fas fa-map-marker"></i></span>
                            <span className="tag is-medium">{props.city}, {props.country}</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-clear has-text-grey"><i className="fas fa-bed"></i></span>
                            <span className="tag is-medium">{props.rooms} Habitaciones</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-clear has-text-grey">{moneyIcons}</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a
                            onClick={(event) => {
                                alert("Habilitaremos esta opción pronto")
                            }
                            }
                            className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                            Reservar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}