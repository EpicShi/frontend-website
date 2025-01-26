"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="weather-alerts">Weather Alerts</Label>
        <Switch id="weather-alerts" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="task-reminders">Task Reminders</Label>
        <Switch id="task-reminders" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="crop-updates">Crop Updates</Label>
        <Switch id="crop-updates" />
      </div>
    </div>
  )
}

