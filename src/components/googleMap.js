import React, { Component } from 'react';
import propTypes from 'prop-types';

import {
  Map, GoogleApiWrapper, Marker, InfoWindow,
} from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%',
};

export class GeoWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 }],
      showingInfoWindow: false,
      activeMarker: {},
      // selectedPlace: {},
    };
  }

  onMarkerClick(props, marker) {
    this.setState({
      // selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked() {
    const { state } = this;
    if (state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  displayMarkers() {
    const { stores } = this.state;
    return stores.map((store, index) => (
      <Marker
        name="Current location"
        onClick={(...e) => this.onMarkerClick(...e)}
        key={store.latitude}
        id={index}
        position={{
          lat: store.latitude,
          lng: store.longitude,
        }}
      />
    ));
  }

  render() {
    const { state, props } = this;
    return (
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        onClick={() => this.onMapClicked()}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
        >
          <div>
            <h1>adsfsdfsafd</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API_KEY,
})(GeoWidget);

GeoWidget.propTypes = {
  google: propTypes.node.isRequired,
};
