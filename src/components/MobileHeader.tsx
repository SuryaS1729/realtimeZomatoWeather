
import type { Dispatch, SetStateAction } from "react"
import Hamburger from "../assets/hamburger.svg?react"
import LightDarkToggle from "./LightDarkToggle"

type Props = {
    setIsSidePanelOpen:Dispatch<SetStateAction<boolean>>
}

export default function MobileHeader({setIsSidePanelOpen}: Props) {
  return (
    <div className='w-full h-16 p-4 bg-background gap-8 sticky top-0 xs:hidden flex justify-end z-1001'>
               
               
                                           <LightDarkToggle />

               
                <button 
                onClick={()=>setIsSidePanelOpen(true)}
>
        <Hamburger className="size-6 "/>
        

      </button>

    </div>
  )
}