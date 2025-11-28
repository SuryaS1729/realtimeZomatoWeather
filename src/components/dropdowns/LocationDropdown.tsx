
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
type Props = {}

export default function LocationDropDown({}: Props) {
  return (
<Select>
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