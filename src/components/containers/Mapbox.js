import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'

class Mapbox extends Component{
    constructor(props){
        super(props)
        this.state = {
            token:'pk.eyJ1IjoiY2hyaXNlZyIsImEiOiJjajh5cmxkcmgyZGFlMnJtcmNxdDJ4c3ZwIn0.TPDJn79DqMc6vIzNy5nnLA',
            latitude:37.7577, longitude:-122.4376, zoom:8
        }
    }
    render(){
        return(
            <div className="container">
                <div className="col-md-4">
                    this is the other column
                </div>
                <div className="col-md-8">
                    <ReactMapGL
                        width={400}
                        height={400}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        zoom={this.state.zoom}
                        mapboxApiAccessToken={this.state.token}
                        onViewportChange={(viewport) => {
                        const {width, height, latitude, longitude, zoom} = viewport
                        // Optionally call `setState` and use the state to update the map.
                            this.setState({latitude,longitude,zoom})
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Mapbox