import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TaskList } from "@/components/task-list"
import { AddTask } from "@/components/add-task"

export default function TasksPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">Tasks</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Task List</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList />
          </CardContent>
        </Card>
        <Card className="sm:col-span-2">
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
          </CardHeader>
          <CardContent>
            <AddTask />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

