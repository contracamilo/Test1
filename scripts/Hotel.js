function Hotel(props) {
    // console.log(props)
    return(
        <div key={props.key} className="card column is-one-third-desktop is-half-tablet" >
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={props.photo} alt={props.slug} />
            </figure>
        </div>
        <div className="card-content">
            <p className="title is-4">{props.name}</p>
            <p>{props.description}</p>
            <div className="field is-grouped is-grouped-multiline" style={{ marginTop: '1em' }}>
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                        <span className="tag is-medium">{props.city}, {props.country}</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                        <span className="tag is-medium">{props.rooms} Habitaciones</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags">
                        <span className="tag is-medium is-info">
                            <i className="fas fa-dollar-sign" style={{ margin: '0 .125em' }}></i>
                            <i className="fas fa-dollar-sign" style={{ margin: '0 .125em' }}></i>
                            <i className="fas fa-dollar-sign" style={{ margin: '0 .125em', opacity: '.25' }}></i>
                            <i className="fas fa-dollar-sign" style={{ margin: '0 .125em', opacity: '.25' }}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>     
    )
}