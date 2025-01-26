import { Progress } from "@/components/ui/progress"

export function CropStatus() {
  // In a real application, you would fetch this data from your backend
  const crops = [
    { name: 'Corn', progress: 75 },
    { name: 'Wheat', progress: 50 },
    { name: 'Soybeans', progress: 30 },
  ]

  return (
    <div className="space-y-4">
      test
      {crops.map((crop) => (
        <div key={crop.name}>
          <div className="flex justify-between mb-1">
            <span>{crop.name}</span>
            <span>{crop.progress}%</span>
          </div>
          <Progress value={crop.progress} className="w-full" />
        </div>
      ))}
    </div>
  )
}