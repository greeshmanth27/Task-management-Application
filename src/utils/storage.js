const STORAGE_KEY = "personal-task-manager-tasks"
const THEME_KEY = "theme"

export const loadTasksFromStorage = () => {
  try {
    const tasks = localStorage.getItem(STORAGE_KEY)
    return tasks ? JSON.parse(tasks) : []
  } catch (error) {
    console.error("Error loading tasks:", error)
    return []
  }
}

export const saveTasksToStorage = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch (error) {
    console.error("Error saving tasks:", error)
  }
}

export const loadThemeFromStorage = () => {
  try {
    const theme = localStorage.getItem(THEME_KEY)
    return theme ? JSON.parse(theme) : false
  } catch (error) {
    return false
  }
}

export const saveThemeToStorage = (isDark) => {
  try {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDark))
  } catch (error) {
    console.error("Error saving theme:", error)
  }
}
