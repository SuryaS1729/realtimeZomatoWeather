
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import Map from "./components/Map"
import { useState } from "react"
import type { Coords } from "./types"
import LocationDropDown from "./components/dropdowns/LocationDropDown"
import { useQuery } from "@tanstack/react-query"
import { getGeocoding } from "./api"
import MaptypeDropDown from "./components/dropdowns/MaptypeDropdown"
import MapLegend from "./components/MapLegend"


function App() {
  const [coordinates,setCoords]= useState<Coords>({
    lat:50, lon:45
  })
  const [location, setLocation]= useState<string>("Tokyo")
  const [mapType, setMapType]= useState<string>("clouds_new")

  const {data: geocodeData}= useQuery({
    queryKey:["geocode", location],
    queryFn: ()=> getGeocoding(location),
  })

  const onMapClick =(lat:number, lon:number)=>{
    setCoords({lat,lon})
    setLocation("custom")
  } 
  const coords = location ==="custom" ? coordinates : {
    lat: geocodeData?.[0].lat ??0,
    lon: geocodeData?.[0].lon ?? 0
  }

  return (
    <div className="flex flex-col gap-8 shadow-md">
      <div className="flex gap-8">
        <div className="flex gap-4">
          <h1 className="text-xl font-semibold">Location:</h1>
          <LocationDropDown location={location} setLocation={setLocation}/>
        </div>
        <div className="flex gap-4">
          <h1 className=" text-xl font-semibold ">Map Type:</h1>
          <MaptypeDropDown mapType={mapType} setMapType={setMapType}/>
        </div>
      </div>
      <div>
        <Map coords = {coords} onMapClick ={onMapClick} mapType={mapType} />
        <MapLegend mapType={mapType}/>
        </div>
<CurrentWeather coords = {coords}/>
<HourlyForecast coords = {coords}/>
<DailyForecast coords = {coords}/>
<AdditionalInfo coords = {coords}/>
</div>
)

}

export default App

