import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"
import AdditionalInfo from "./components/cards/AdditionalInfo"
import Map from "./components/Map"
import { useState } from "react"


function App() {
  const [coords,setCoords]= useState({
    lat:10, lon:25
  })

  return (
    <div className="flex flex-col gap-8 shadow-md">
      <Map/>
<CurrentWeather/>
<HourlyForecast/>
<DailyForecast/>
<AdditionalInfo/>
</div>
)

}

export default App
