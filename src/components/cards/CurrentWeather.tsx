import { useSuspenseQuery } from '@tanstack/react-query'

import { getWeather } from '../../api'
import Card from './Card'
import WeatherIcon from './WeatherIcon'

type Props = {}

export default function CurrentWeather({}: Props) {


  const {data}= useSuspenseQuery({
    queryKey:["weather"],
    queryFn: ()=> getWeather({lat:3.7128, lon:99.6})

  })


  return (
<Card title='Current Weather' childrenClassName='flex flex-col items-center'>
    <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-6xl font-semibold text-center'>{Math.round(data.current.temp)}°C</h2>
         <WeatherIcon src={data.current.weather[0].icon} className='size-18'/>
        
    </div>


</Card>  )
}