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

