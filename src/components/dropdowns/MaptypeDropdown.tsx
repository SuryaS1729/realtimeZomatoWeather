
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Dispatch, SetStateAction } from "react";
type Props = {
    mapType: string,
    setMapType: Dispatch<SetStateAction<string>>
}

export default function MaptypeDropdown({mapType, setMapType}: Props) {
  return (
<Select value={mapType} onValueChange={(value)=> setMapType(value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Map Type" />
  </SelectTrigger>
  <SelectContent className="z-1001">
    {types.map((type) => (
      <SelectItem key={type} value={type} className="capitalize">
        {type.split("_")[0]}
      </SelectItem>
    ))}
  </SelectContent>
</Select>  )
}

// the map has a z-index of 1000

const types = [
 "clouds_new",
 "precipitation_new",
 "pressure_new",
    "wind_new",
    "temp_new"
];