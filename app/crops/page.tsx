import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CropStatus } from "@/components/crop-status"
import { CropYield } from "@/components/crop-yield"
import { PesticideUsage } from "@/components/pesticide-usage"
import { IrrigationSchedule } from "@/components/irrigation-schedule"

export default function CropsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">Crops</h1>
      <div className="grid gap-4 sm:grid-cols-2">
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
            <CardTitle>Crop Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <CropYield />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pesticide Usage</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <PesticideUsage /> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Irrigation Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <IrrigationSchedule /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}