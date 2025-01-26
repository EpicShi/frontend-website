import { Sun, Cloud, CloudRain } from 'lucide-react'

const forecastData = [
  { day: 'Mon', temp: 75, condition: 'Sunny' },
  { day: 'Tue', temp: 72, condition: 'Partly Cloudy' },
  { day: 'Wed', temp: 68, condition: 'Rainy' },
  { day: 'Thu', temp: 70, condition: 'Partly Cloudy' },
  { day: 'Fri', temp: 73, condition: 'Sunny' },
]

export function WeatherForecast() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {forecastData.map((day) => (
        <div key={day.day} className="text-center">
          <div className="font-semibold">{day.day}</div>
          <div className="my-2">
            {day.condition === 'Sunny' && <Sun size={24} className="mx-auto text-yellow-500" />}
            {day.condition === 'Partly Cloudy' && <Cloud size={24} className="mx-auto text-gray-500" />}
            {day.condition === 'Rainy' && <CloudRain size={24} className="mx-auto text-blue-500" />}
          </div>
          <div>{day.temp}°F</div>
        </div>
      ))}
    </div>
  )
}

