"use client"

import { Sun, Moon, CheckSquare } from "lucide-react"

const Header = ({ isDark, toggleTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckSquare className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Task Manager</h1>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
