"use client"

import TaskCard from "./TaskCard"
import { getFilteredAndSortedTasks } from "../utils/taskUtils"

const TaskList = ({ tasks, filter, searchTerm, sortBy, onToggleTask, onEditTask, onDeleteTask }) => {
  const filteredAndSortedTasks = getFilteredAndSortedTasks(tasks, filter, searchTerm, sortBy)

  if (filteredAndSortedTasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg">No tasks match your current filters.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Tasks ({filteredAndSortedTasks.length})</h2>
      <div className="grid gap-4">
        {filteredAndSortedTasks.map((task, index) => (
          <div key={task.id} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <TaskCard task={task} onToggle={onToggleTask} onEdit={onEditTask} onDelete={onDeleteTask} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
