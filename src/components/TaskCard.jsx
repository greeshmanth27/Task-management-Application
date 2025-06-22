"use client"

import { Edit, Trash2, Calendar, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { formatDate, isOverdue, getDaysUntilDue } from "../utils/helpers"

const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }
  }

  const getDueDateStatus = () => {
    if (!task.dueDate) return null

    const daysUntil = getDaysUntilDue(task.dueDate)
    const overdue = isOverdue(task.dueDate)

    if (overdue) {
      return {
        text: `Overdue by ${Math.abs(daysUntil)} day${Math.abs(daysUntil) !== 1 ? "s" : ""}`,
        color: "text-red-600 dark:text-red-400",
        icon: AlertCircle,
      }
    } else if (daysUntil === 0) {
      return {
        text: "Due today",
        color: "text-orange-600 dark:text-orange-400",
        icon: Clock,
      }
    } else if (daysUntil === 1) {
      return {
        text: "Due tomorrow",
        color: "text-yellow-600 dark:text-yellow-400",
        icon: Clock,
      }
    } else if (daysUntil <= 7) {
      return {
        text: `Due in ${daysUntil} days`,
        color: "text-blue-600 dark:text-blue-400",
        icon: Calendar,
      }
    }

    return {
      text: `Due ${formatDate(task.dueDate)}`,
      color: "text-gray-600 dark:text-gray-400",
      icon: Calendar,
    }
  }

  const dueDateStatus = getDueDateStatus()

  return (
    <div className={`task-card ${task.completed ? "opacity-75" : ""}`}>
      <div className="flex items-start space-x-4">
        {/* Completion Toggle */}
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-300 dark:border-gray-600 hover:border-green-500"
          }`}
        >
          {task.completed && <CheckCircle2 className="h-4 w-4" />}
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3
                className={`text-lg font-medium ${
                  task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"
                }`}
              >
                {task.title}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  task.completed ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {task.description}
              </p>
            </div>

            {/* Priority Badge */}
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
            >
              {task.priority}
            </span>
          </div>

          {/* Task Meta Information */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Created {formatDate(task.createdAt)}</span>
              {dueDateStatus && (
                <div className={`flex items-center space-x-1 ${dueDateStatus.color}`}>
                  <dueDateStatus.icon className="h-4 w-4" />
                  <span>{dueDateStatus.text}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEdit(task)}
                className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                title="Edit task"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(task)}
                className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                title="Delete task"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
