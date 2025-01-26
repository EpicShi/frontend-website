import { Sun, Cloud, CloudRain } from 'lucide-react'

export function WeatherWidget() {
  const weatherData = {
    temperature: 72,
    condition: 'Partly Cloudy',
    humidity: 60,
    windSpeed: 5,
  }

  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{weatherData.temperature}°F</div>
      <div className="flex justify-center items-center mb-2">
        {weatherData.condition === 'Sunny' && <Sun size={24} className="text-yellow-500" />}
        {weatherData.condition === 'Partly Cloudy' && <Cloud size={24} className="text-gray-500" />}
        {weatherData.condition === 'Rainy' && <CloudRain size={24} className="text-blue-500" />}
        <span className="ml-2">{weatherData.condition}</span>
      </div>
      <div>Humidity: {weatherData.humidity}%</div>
      <div>Wind: {weatherData.windSpeed} mph</div>
    </div>
  )
}