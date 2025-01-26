import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Corn", yield: 180 },
  { name: "Wheat", yield: 120 },
  { name: "Soybeans", yield: 60 },
  { name: "Barley", yield: 90 },
]

export function CropYield() {
  return (
    <h1>test</h1>
    // <ResponsiveContainer width="100%" height={300}>
    //   <BarChart data={data}>
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Bar dataKey="yield" fill="#16a34a" />
    //   </BarChart>
    // </ResponsiveContainer>
  )
}