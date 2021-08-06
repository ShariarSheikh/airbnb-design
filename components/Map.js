import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: 500,
    height: "90vh",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <div>
      <ReactMapGL
        mapStyle="mapbox://styles/shariardev/cks0lpge62f5517qo5lo8ck3d"
        {...viewport}
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {searchResult.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetRight={-10}
            >
              <p
                className="cursor-pointer text-2xl animate-bounce"
                role="img"
                onClick={() => setSelectedLocation(result)}
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
