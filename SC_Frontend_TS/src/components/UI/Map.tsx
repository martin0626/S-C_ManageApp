import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";



type TMapProps = {
    location: [number, number];
    message?: string;
    height?: number;
}

export default function MapComponent({location, message='Our Location', height=436}: TMapProps){
    return (
        <MapContainer style={{ height: height }} center={location} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
                <Popup>
                    {message}
                </Popup>
            </Marker>
        </MapContainer>
    )
}