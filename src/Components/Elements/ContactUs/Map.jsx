import React from "react";
import GoogleMapReact from "google-map-react";
function Map() {
  const defaultProps = {
    center: {
      lat: 31.521928759675628,
      lng: 74.35675812385502,
    },
    zoom: 11,
  };
  return (
    <div className="d-flex justify-content-center">
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <p
            lat={31.521928759675628}
            lng={31.521928759675628}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;
