export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case "pending":
      return tasks.filter((task) => !task.completed)
    case "completed":
      return tasks.filter((task) => task.completed)
    default:
      return tasks
  }
}

export const searchTasks = (tasks, searchTerm) => {
  if (!searchTerm) return tasks

  const term = searchTerm.toLowerCase()
  return tasks.filter(
    (task) => task.title.toLowerCase().includes(term) || task.description.toLowerCase().includes(term),
  )
}

export const sortTasks = (tasks, sortBy) => {
  const sortedTasks = [...tasks]

  switch (sortBy) {
    case "priority":
      return sortedTasks.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 }
        return priorityOrder[b.priority] - priorityOrder[a.priority]
      })
    case "alphabetical":
      return sortedTasks.sort((a, b) => a.title.localeCompare(b.title))
    case "dueDate":
      return sortedTasks.sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return new Date(a.dueDate) - new Date(b.dueDate)
      })
    default: // date
      return sortedTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }
}

export const getFilteredAndSortedTasks = (tasks, filter, searchTerm, sortBy) => {
  let filteredTasks = filterTasks(tasks, filter)
  filteredTasks = searchTasks(filteredTasks, searchTerm)
  return sortTasks(filteredTasks, sortBy)
}
