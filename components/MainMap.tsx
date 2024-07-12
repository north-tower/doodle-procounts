import * as React from 'react';
import Map, { Marker } from 'react-map-gl';

function MainMap() {
  const [viewState, setViewState] = React.useState({
    longitude: 36.969859,
    latitude: -1.164050,
    zoom: 11,
  });
  
  const markerLongitude = 36.969859
  const markerLatitude = -1.164050;
  
  return (
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWlraTAwNyIsImEiOiJjbGNxNHd2aGkwMmg1M29reWd2ZGJod2M1In0.f9-OPY7z8IFoBGwdM7zUZw"
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/miki007/clgcabeu3001m01mmogi3u0wv"
        style={{ width: 1340, height: 400 }}
      >
        <Marker longitude={markerLongitude} latitude={markerLatitude}>
          <p
            role="img"
            className="cursor-pointer text-2xl animate-bounce"
            aria-label="push-pin"
          >
            📌
          </p>
        </Marker>
      </Map>
  
  );
}

export default MainMap;
