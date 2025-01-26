import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function TaskList() {
  // In a real application, you would fetch this data from your backend
  const tasks = [
    { id: 1, description: 'Water corn field', completed: false },
    { id: 2, description: 'Check wheat for pests', completed: true },
    { id: 3, description: 'Repair fence in north pasture', completed: false },
    { id: 4, description: 'Order new seeds', completed: false },
  ]

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center space-x-2">
          <Checkbox id={`task-${task.id}`} checked={task.completed} />
          <Label
            htmlFor={`task-${task.id}`}
            className={task.completed ? 'line-through text-muted-foreground' : ''}
          >
            {task.description}
          </Label>
        </div>
      ))}
    </div>
  )
}

