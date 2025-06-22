import { CheckSquare, Plus } from "lucide-react"

const EmptyState = () => {
  return (
    <div className="text-center py-16">
      <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
        <CheckSquare className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No tasks yet</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
        Get started by creating your first task. Stay organized and boost your productivity!
      </p>
      <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
        <Plus className="h-4 w-4" />
        <span className="text-sm font-medium">Add your first task above by clicking add task </span>
      </div>
    </div>
  )
}

export default EmptyState
