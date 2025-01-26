import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { field: "Field 1", moisture: 35 },
  { field: "Field 2", moisture: 28 },
  { field: "Field 3", moisture: 42 },
  { field: "Field 4", moisture: 31 },
]

export function SoilMoisture() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      {/* <BarChart data={data}>
        <XAxis dataKey="field" />
        <YAxis />
        <Bar dataKey="moisture" fill="#3b82f6" />
      </BarChart> */}
      <h1>test</h1>
    </ResponsiveContainer>
  )
}