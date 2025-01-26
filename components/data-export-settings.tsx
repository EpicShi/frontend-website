import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DataExportSettings() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="export-format" className="block text-sm font-medium mb-1">Export Format</label>
        <Select>
          <SelectTrigger id="export-format">
            <SelectValue placeholder="Select format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="csv">CSV</SelectItem>
            <SelectItem value="json">JSON</SelectItem>
            <SelectItem value="xlsx">Excel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="date-range" className="block text-sm font-medium mb-1">Date Range</label>
        <Select>
          <SelectTrigger id="date-range">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-week">Last Week</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
            <SelectItem value="all-time">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button>Export Data</Button>
    </div>
  )
}

