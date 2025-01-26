import { Badge } from "@/components/ui/badge"

const equipmentData = [
  { name: "Tractor", status: "Operational" },
  { name: "Harvester", status: "Maintenance" },
  { name: "Seeder", status: "Operational" },
  { name: "Sprayer", status: "Repair" },
]

export function EquipmentStatus() {
  return (
    <div className="space-y-2">
      {equipmentData.map((item) => (
        <div key={item.name} className="flex justify-between items-center">
          <span>{item.name}</span>
          <Badge 
            variant={item.status === "Operational" ? "default" : item.status === "Maintenance" ? "warning" : "destructive"}
          >
            {item.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}

