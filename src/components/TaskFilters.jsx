"use client"

import { Search, Filter, SortAsc } from "lucide-react"

const TaskFilters = ({ filter, setFilter, searchTerm, setSearchTerm, sortBy, setSortBy }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 rounded-md color-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
            {[
              { key: "all", label: "All" },
              { key: "pending", label: "Pending" },
              { key: "completed", label: "Completed" },
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  filter === filterOption.key
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <SortAsc className="h-4 w-4 rounded-md "  />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input-field min-w-0  rounded-md color-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500">
            <option value="date">Sort by Date</option>
            <option value="priority">Sort by Priority</option>
            <option value="alphabetical">Sort Alphabetically</option>
            <option value="dueDate">Sort by Due Date</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default TaskFilters
