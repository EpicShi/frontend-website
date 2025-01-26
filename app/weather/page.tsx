import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WeatherWidget } from "@/components/weather-widget"
import { WeatherForecast } from "@/components/weather-forecast"
import { SoilMoisture } from "@/components/soil-moisture"
import { RainfallHistory } from "@/components/rainfall-history"

export default function WeatherPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">Weather</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Weather</CardTitle>
          </CardHeader>
          <CardContent>
            <WeatherWidget />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>5-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <WeatherForecast />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Soil Moisture</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <SoilMoisture /> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rainfall History</CardTitle>
          </CardHeader>
          <CardContent>
            <RainfallHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}