import { useSuspenseQuery } from "@tanstack/react-query"
import Card from "./Card"
import { getWeather } from "../../api"
import Sunrise from "/src/assets/sunrise.svg?react";
import Sunset from "/src/assets/sunset.svg?react";
import Wind from "/src/assets/wind.svg?react";
import Uv from "/src/assets/uv.svg?react";
import Pressure from "/src/assets/pressure.svg?react";
import Cloud from "/src/assets/cloud.svg?react";

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
                <FormatComponent value ={value} number={data.current[value]}/>
            </div>
        ))}
    </Card>

)
}

function FormatComponent({value, number}:{value: string,number:number}){
    if(value === 'sunrise'|| value === 'sunset'){
        return new Date(number*1000).toLocaleTimeString(undefined,{ 
                    hour:"numeric",
                    minute:"2-digit",
                    hour12:true
                })
    }

    return number

}

const rows =[
    {
    label: "Cloudiness (%)",
    value: 'clouds',
    icon: Cloud
},
{
    label: "UV Index",
    value: "uvi",
    icon: Uv
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    icon: Wind
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    icon: Pressure
  },
  {
    label: "Sunrise",
    value: "sunrise",
    icon: Sunrise
  },
  {
    label: "Sunset",
    value: "sunset",
    icon: Sunset
  }
] as const

