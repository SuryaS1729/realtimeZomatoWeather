import { getAirPollution } from "@/api"
import type { Coords } from "@/types"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Suspense } from "react"
import Card from "./cards/Card"
import { Slider } from "@/components/ui/slider"


type Props = {
  coords: Coords
}

export default function SidePanel(props: Props){
  return (
    <div className='fixed top-0 right-0 h-screen w-90 shadow-md bg-sidebar z-1001 py-8 px-4'>
        <Suspense>
           <AirPollution {...props}/>
        </Suspense>
    </div>
  )
}


function AirPollution({coords}: Props) {

    const {data}= useSuspenseQuery({
        queryKey:["airPollution", coords],
        queryFn: ()=> getAirPollution(coords)
    })

    return(
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Air Pollution</h1>
        <h1 className="text-5xl font-semibold">{data.list[0].main.aqi}</h1>
        <h1 className="text-2xl font-semibold">AQI</h1>
        {Object.entries(data.list[0].components).map(([key,value])=>{
          return(
            <Card 
              key={key} 
              childrenClassName="flex flex-col gap-3"
              className="hover:scale-105 transition-transform duration-160 from-sidebar-accent to-sidebar-accent/45">
              <div className="flex justify-between">
                <span className="text-lg font-bold capitalize">{key}</span>
                <span className="text-lg font-semibold">{value}</span>
              </div>
              <Slider disabled/>
            </Card>
          )
        })}
      </div>

    )

    


}