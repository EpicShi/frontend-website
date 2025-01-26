import { Progress } from "@/components/ui/progress"

const livestockData = [
  { type: "Cattle", count: 150, capacity: 200 },
  { type: "Pigs", count: 300, capacity: 350 },
  { type: "Chickens", count: 1000, capacity: 1200 },
]

export function LivestockOverview() {
  return (
    <div className="space-y-4">
      {livestockData.map((item) => (
        <div key={item.type} className="space-y-2">
          <div className="flex justify-between">
            <span>{item.type}</span>
            <span>{item.count} / {item.capacity}</span>
          </div>
          <Progress value={(item.count / item.capacity) * 100} />
        </div>
      ))}
    </div>
  )
}

