"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import TaskStats from "./components/TaskStats"
import TaskForm from "./components/TaskForm"
import TaskFilters from "./components/TaskFilters"
import TaskList from "./components/TaskList"
import EmptyState from "./components/EmptyState"
import DeleteConfirmModal from "./components/DeleteConfirmModal"
import { loadTasksFromStorage, saveTasksToStorage, loadThemeFromStorage, saveThemeToStorage } from "./utils/storage"
import { generateId } from "./utils/helpers"

function App() {
  const [tasks, setTasks] = useState([])
  const [isDark, setIsDark] = useState(false)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  // Load data on mount
  useEffect(() => {
    const savedTasks = loadTasksFromStorage()
    const savedTheme = loadThemeFromStorage()
    setTasks(savedTasks)
    setIsDark(savedTheme)
  }, [])

  // Save tasks when they change
  useEffect(() => {
    saveTasksToStorage(tasks)
  }, [tasks])

  // Handle theme changes
  useEffect(() => {
    saveThemeToStorage(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  // Task actions
  const addTask = (taskData) => {
    const newTask = {
      id: generateId(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTasks([...tasks, newTask])
  }

  const updateTask = (id, updates) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updates, updatedAt: new Date().toISOString() } : task)),
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    setDeleteConfirm(null)
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() } : task,
      ),
    )
  }

  const startEdit = (task) => {
    setEditingTask(task)
    setShowAddForm(true)
  }

  const cancelEdit = () => {
    setEditingTask(null)
    setShowAddForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <TaskStats tasks={tasks} />

          <TaskForm
            showForm={showAddForm}
            setShowForm={setShowAddForm}
            editingTask={editingTask}
            onAddTask={addTask}
            onUpdateTask={updateTask}
            onCancelEdit={cancelEdit}
          />

          <TaskFilters
            filter={filter}
            setFilter={setFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {tasks.length === 0 ? (
            <EmptyState />
          ) : (
            <TaskList
              tasks={tasks}
              filter={filter}
              searchTerm={searchTerm}
              sortBy={sortBy}
              onToggleTask={toggleTask}
              onEditTask={startEdit}
              onDeleteTask={setDeleteConfirm}
            />
          )}
        </div>
      </main>

      {deleteConfirm && (
        <DeleteConfirmModal
          task={deleteConfirm}
          onConfirm={() => deleteTask(deleteConfirm.id)}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}
    </div>
  )
}

export default App
