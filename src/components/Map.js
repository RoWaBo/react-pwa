import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import { useState } from 'react';

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 55.7060378,
        longitude: 12.5142235,
        zoom: 10,
        width: '100vw',
        height: '50vh'
    });

    const navigationControlStyle = {
        right: 10,
        top: 50
    }
    const geolocateControlStyle = {
        right: 10,
        top: 10
    }

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={setViewport}
        >
            <Marker latitude={55.7060378} longitude={12.5142235}>
                <div style={{ width: '1rem', height: '1rem', backgroundColor: 'orange' }}></div>
            </Marker>
            <NavigationControl style={navigationControlStyle} />
            <GeolocateControl
                style={geolocateControlStyle}
                trackUserLocation={true}
                positionOptions={{ enableHighAccuracy: true }}
                showAccuracyCircle={true}
                auto
            />
        </ReactMapGL>
    );
}

export default Map;