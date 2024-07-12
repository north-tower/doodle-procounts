"use client"

import * as React from 'react';
import Map from 'react-map-gl';

function MainMap() {
  return (
    <div className="w-full h-1/2">
      <Map
      mapboxAccessToken="pk.eyJ1IjoibWlraTAwNyIsImEiOiJjbGNxNHd2aGkwMmg1M29reWd2ZGJod2M1In0.f9-OPY7z8IFoBGwdM7zUZw"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 1300, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
    </div>
  )
}

export default MainMap