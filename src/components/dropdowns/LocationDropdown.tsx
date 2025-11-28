
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Dispatch, SetStateAction } from "react";
type Props = {
    location: string,
    setLocation: Dispatch<SetStateAction<string>>
}

export default function LocationDropDown({location, setLocation}: Props) {
  return (
<Select value={location} onValueChange={(value)=> setLocation(value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Location" />
  </SelectTrigger>
  <SelectContent className="z-1001">
    {locations.map((city) => (
      <SelectItem key={city} value={city}>
        {city}
      </SelectItem>
    ))}
  </SelectContent>
</Select>  )
}

// the map has a z-index of 1000

const locations = [
  // Indian Cities
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",

  // Foreign Cities
  "New York",
  "London",
  "Tokyo",
  "Dubai",
  "Paris"
];