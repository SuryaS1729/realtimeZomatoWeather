
import { MapContainer, TileLayer, Marker,  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
type Props = {}

export default function Map({}: Props) {
  return (
<MapContainer center={[3.7128, 99.6]} zoom={5} style={{width: "1000px", height: "500px",  }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[3.7128, 99.6]}/>
</MapContainer>  )
}