"use client"

import { AlertCircle } from "lucide-react"

const DeleteConfirmModal = ({ task, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md animate-bounce-in">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delete Task</h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Are you sure you want to delete "{task.title}"? This action cannot be undone.
          </p>

          <div className="flex justify-end space-x-3">
            <button onClick={onCancel} className="btn-secondary">
              Cancel
            </button>
            <button onClick={onConfirm} className="btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal
