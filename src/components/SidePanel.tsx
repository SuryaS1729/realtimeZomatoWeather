import { Suspense } from "react"


type Props = {}

export default function SidePanel({}: Props) {
  return (
    <div className='fixed top-0 right-0 h-screen w-80 shadow-md bg-sidebar z-1001'>

        <Suspense>

        </Suspense>
    </div>
  )
}

function AirPollution(){
    return <div>Air Pollution</div>
}