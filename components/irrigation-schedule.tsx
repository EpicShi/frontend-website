import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const scheduleData = [
  { field: "Field 1", crop: "Corn", schedule: "Mon, Wed, Fri", duration: "2 hours" },
  { field: "Field 2", crop: "Wheat", schedule: "Tue, Thu, Sat", duration: "1.5 hours" },
  { field: "Field 3", crop: "Soybeans", schedule: "Mon, Thu", duration: "3 hours" },
  { field: "Field 4", crop: "Barley", schedule: "Wed, Sat", duration: "2.5 hours" },
]

export function IrrigationSchedule() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Field</TableHead>
            <TableHead>Crop</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleData.map((row) => (
            <TableRow key={row.field}>
              <TableCell>{row.field}</TableCell>
              <TableCell>{row.crop}</TableCell>
              <TableCell>{row.schedule}</TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

