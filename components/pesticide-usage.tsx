import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts"

const data = [
  { name: "Herbicides", value: 40 },
  { name: "Insecticides", value: 30 },
  { name: "Fungicides", value: 20 },
  { name: "Other", value: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function PesticideUsage() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

