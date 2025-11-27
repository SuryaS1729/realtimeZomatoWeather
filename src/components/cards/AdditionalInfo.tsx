import { useSuspenseQuery } from "@tanstack/react-query"
import Card from "./Card"
import { getWeather } from "../../api"
import Sunrise from "../../assets/sunrise.svg?react"
import Sunset from "../../assets/sunset.svg?react"
import Cloud from "../../assets/cloud.svg?react"
import Uv from "../../assets/uv.svg?react"
import Wind from "../../assets/wind.svg?react"
import Pressure from "../../assets/pressure.svg?react"


type Props = {}

export default function AdditionalInfo({}: Props) {

       const {data}= useSuspenseQuery({
    queryKey:["weather"],
    queryFn: ()=> getWeather({lat:3.7128, lon:99.6})

  })
  return (

    <Card title="Additional Weather Information" childrenClassName="flex flex-col gap-8 ">
        {rows.map(({label,value, Icon})=>(
            <div className="flex justify-between" key={value}>
                <span>{label}</span>
                <FormatComponent value ={value} number={data.current[value]}/>
                <Icon className="size-8"/>
            </div>
        ))}
    </Card>

)
}

function FormatComponent({ value, number }: { value: string; number: number }) {
  if (value === "sunrise" || value === "sunset")
    return new Date(number * 1000).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })


  return number
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    Icon: Cloud,
  },
  {
    label: "UV Index",
    value: "uvi",
    Icon: Uv,
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    Icon: Wind,
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    Icon: Pressure,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    Icon: Sunrise,
  },
  {
    label: "Sunset",
    value: "sunset",
    Icon: Sunset,
  },
] as const