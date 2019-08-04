import React, { useState } from 'react';
import propTypes from 'prop-types';

import {
  Map, GoogleApiWrapper, Marker, InfoWindow,
} from 'google-maps-react';

const MAP_STYLES = {
  width: '100%',
  height: '100%',
};

const DEFAULT_COORD = {
  lat: 53.909979,
  lng: 27.576352000000043,
};

export const GeoWidget = ({ google, places }) => {
  const [infoWindow, setInfoWindow] = useState('');
  const [activeMarker, setActiveMarker] = useState(null);

  const onMarkerClick = (props, marker) => {
    setInfoWindow(places[marker.id].text);
    setActiveMarker(marker);
  };

  const onMapClicked = () => {
    if (infoWindow) {
      setInfoWindow('');
      setActiveMarker(null);
    }
  };

  const displayMarkers = places.map((place, index) => (
    <Marker
      name="Current location"
      onClick={onMarkerClick}
      key={place.lat}
      id={index}
      position={{
        lat: place.lat,
        lng: place.lng,
      }}
    />
  ));

  const centrCoord = places[places.length - 1] || DEFAULT_COORD;

  return (
    <Map
      google={google}
      zoom={10}
      style={MAP_STYLES}
      onClick={onMapClicked}
      initialCenter={{
        lat: centrCoord.lat,
        lng: centrCoord.lng,
      }}
    >
      {displayMarkers}
      <InfoWindow
        marker={activeMarker}
        visible={infoWindow}
      >
        {infoWindow}
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZAPk9Ycyt8Hir4-jJ7uQu5V9j7VoCvlQ',
})(GeoWidget);

GeoWidget.propTypes = {
  google: propTypes.shape({
    maps: propTypes.object.isRequired,
  }).isRequired,
  places: propTypes.arrayOf({
    text: propTypes.string.isRequired,
    lng: propTypes.string.isRequired,
    lat: propTypes.string.isRequired,
  }).isRequired,
};
