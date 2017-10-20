import React, { Component }          from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import CityPin                       from './city-pin'
import CityInfo                      from './city-info'

class Mapbox extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            token:'pk.eyJ1IjoiY2hyaXNlZyIsImEiOiJjajh5cmxkcmgyZGFlMnJtcmNxdDJ4c3ZwIn0.TPDJn79DqMc6vIzNy5nnLA',
            latitude:40.71, longitude:-73.90, zoom:8, show: false, selected:null,
            locations: [ 
                {lat:40.745598, lng:-73.825680, name:'Phil & Sons Pizza - Flushing Ny'},
                {lat:40.743395 ,lng:-73.825799 ,name:'Kung Fu Xiao Long Bao'},
                {lat:40.761908 ,lng:-73.830375 ,name:'Joe\'s Shanghai'},
                {lat:40.763377 ,lng:-73.807783 ,name:'Mad for Chicken Flushing'}
             ]
        }
    }
    focusMarker(){
        
    }
    renderPopup(){
        return this.state.show ? <Popup
            tipSize={5}
            anchor="top"
            longitude={this.state.selected.lng}
            latitude={this.state.selected.lat}
            onClose={() => this.setState({show:false}) } >
            <CityInfo venue={this.state.selected} />
        </Popup> : null
        
    }
    render(){
        return(
            <div className="container">
                <br/>

                <div className="row">
                    <div className="col-md-4">
                        this is the other column
                        <br/>
                        <button onClick={ () => this.focusMarker() } >
                            click this button!
                        </button>
                    </div>
                    <div className="col-md-8">
                        <ReactMapGL
                            width={500}
                            height={600}
                            mapStyle="mapbox://styles/mapbox/basic-v9"
                            latitude={this.state.latitude}
                            longitude={this.state.longitude}
                            zoom={this.state.zoom}
                            mapboxApiAccessToken={this.state.token}
                            onViewportChange={(viewport) => {
                            const {width, height, latitude, longitude, zoom} = viewport
                            // Optionally call `setState` and use the state to update the map.
                                this.setState({latitude,longitude,zoom})
                            }} 
                        >
                            {
                                this.state.locations.map( (lo,i) => {
                                    return(
                                        <Marker key={i} longitude={lo.lng} latitude={lo.lat} >
                                            <CityPin size={20} onClick={ () => this.setState({show:true, selected:lo}) } />
                                        </Marker>
                                    )
                                })
                            }
                            
                            {this.renderPopup()}
                        </ReactMapGL>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mapbox