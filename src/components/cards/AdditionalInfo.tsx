import { useSuspenseQuery } from "@tanstack/react-query"
import Card from "./Card"
import { getWeather } from "../../api"


type Props = {}

export default function AdditionalInfo({}: Props) {

       const {data}= useSuspenseQuery({
    queryKey:["weather"],
    queryFn: ()=> getWeather({lat:3.7128, lon:99.6})

  })
  return (

    <Card title="Additional Weather Information" childrenClassName="flex flex-col gap-8 ">
        {rows.map(({label,value})=>(
            <div className="flex justify-between" key={value}>
                <span>{label}</span>
                <span>{data.current[value]}</span>
            </div>
        ))}
    </Card>

)
}

const rows =[
    {
    label: "Cloudiness (%)",
    value: 'clouds'
},
{
    label: "UV Index",
    value: "uvi"
  },
  {
    label: "Wind Direction",
    value: "wind_deg"
  },
  {
    label: "Pressure (hPa)",
    value: "pressure"
  },
  {
    label: "Sunrise",
    value: "sunrise"
  },
  {
    label: "Sunset",
    value: "sunset"
  }
] as const

