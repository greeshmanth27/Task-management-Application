import { Calendar, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { isOverdue } from "../utils/helpers"

const TaskStats = ({ tasks }) => {
  const stats = {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length,
    overdue: tasks.filter((task) => {
      if (!task.dueDate || task.completed) return false
      return isOverdue(task.dueDate)
    }).length,
  }

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

  const statCards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: Calendar,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: Clock,
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      title: "Overdue",
      value: stats.overdue,
      icon: AlertCircle,
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div
          key={stat.title}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Completion Rate */}
      {stats.total > 0 && (
        <div className="md:col-span-2 lg:col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Completion Rate</h3>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskStats
