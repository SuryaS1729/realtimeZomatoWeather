import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import Card from "./components/cards/Card"


function App() {
    console.log("fetching...")


  const {data}= useQuery({
    queryKey:["weather"],
    queryFn: ()=> getWeather({lat:10, lon:25})

  })

  return (
    <div className="flex flex-col gap-8 shadow-md">
<Card title="Current Weather">{JSON.stringify(data?.current).slice(0,100)}</Card>
<Card title="Hourly Forecast (48 hrs)">{JSON.stringify(data?.hourly).slice(0,100)}</Card>
<Card title = "Daily Forecast">{JSON.stringify(data?.daily).slice(0,100)}</Card>
</div>
)

}

export default App
