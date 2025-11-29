import { getAirPollution } from "@/api"
import type { Coords } from "@/types"
import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query"
import { Suspense } from "react"


type Props = {
  coords: Coords
}

export default function SidePanel(props: Props) {
  return (
    <div className='fixed top-0 right-0 h-screen w-80 shadow-md bg-sidebar z-1001'>

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


}