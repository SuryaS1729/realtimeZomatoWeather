
import { MapContainer, TileLayer, Marker, useMap,  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Coords } from '@/types';
import { useEffect } from 'react';
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const API_KEY = import.meta.env.VITE_API_KEY;

type Props = {
    coords:Coords
    onMapClick:(lat:number, lon:number)=>void
    mapType: string
}

export default function Map({coords, onMapClick, mapType}: Props) {

    const {lat,lon}=coords
  return (
<MapContainer 

center={[lat, lon]} zoom={5} style={{width: "100%", height: "100%",  }}>
  <MapTileLayer/>
  <TileLayer opacity={0.7} url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}/>
    <MapClick onMapClick={onMapClick} coords = {coords}/>
<Marker position={[lat, lon]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
</MapContainer>  )
}


function MapClick({onMapClick, coords}:{onMapClick:(lat:number, lon:number)=>void, coords: Coords}){
    const map = useMap()
    map.panTo([coords.lat,coords.lon])


    map.on('click', (e)=>{
        const {lat, lng} = e.latlng
        onMapClick(lat,lng)

    })


    return null
}

function MapTileLayer() {
  const map = useMap()

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: "7dX9wTjM15cfKrCfELvs",
    })
    tileLayer.addTo(map)

    return () => {
      map.removeLayer(tileLayer)
    }
  }, [map])

  return null
}