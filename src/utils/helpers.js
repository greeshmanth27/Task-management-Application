export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// export const formatDate = (dateString) => {
//   const date = new Date(dateString)
//   return date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   })
// }

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, "0")
  const month = date.toLocaleString("en-US", { month: "short" })
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

export const isOverdue = (dueDate) => {
  if (!dueDate) return false
  return new Date(dueDate) < new Date()
}

export const getDaysUntilDue = (dueDate) => {
  if (!dueDate) return null
  const today = new Date()
  const due = new Date(dueDate)
  const diffTime = due - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}
