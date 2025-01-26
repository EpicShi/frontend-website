import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WeatherWidget } from "@/components/weather-widget"
import { CropStatus } from "@/components/crop-status"
import { TaskList } from "@/components/task-list"
import { FinancialSummary } from "@/components/financial-summary"
import { EquipmentStatus } from "@/components/equipment-status"
import { LivestockOverview } from "@/components/livestock-overview"

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">Farm Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full sm:col-span-1">
          <CardHeader>
            <CardTitle>Weather</CardTitle>
          </CardHeader>
          <CardContent>
            <WeatherWidget />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Crop Status</CardTitle>
          </CardHeader>
          <CardContent>
            <CropStatus />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList />
          </CardContent>
        </Card>
        <Card className="col-span-full sm:col-span-1">
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <FinancialSummary />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Equipment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <EquipmentStatus />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Livestock Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <LivestockOverview />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

