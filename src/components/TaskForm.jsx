"use client";

import { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

const TaskForm = ({
  showForm,
  setShowForm,
  editingTask,
  onAddTask,
  onUpdateTask,
  onCancelEdit,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        dueDate: editingTask.dueDate || "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
      });
    }
  }, [editingTask]);

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.description.trim())
      errors.description = "Description is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingTask) {
      onUpdateTask(editingTask.id, formData);
      onCancelEdit();
    } else {
      onAddTask(formData);
      setShowForm(false);
    }

    setFormData({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
    });
    setFormErrors({});
  };

  const handleCancel = () => {
    if (editingTask) {
      onCancelEdit();
    } else {
      setShowForm(false);
    }
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
    });
    setFormErrors({});
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {editingTask ? "Edit Task" : "Add New Task"}
        </h2>
        <button
          onClick={() => {
            if (showForm) {
              handleCancel();
            } else {
              setShowForm(true);
            }
          }}
          className="btn-primary flex items-center space-x-2 rounded-md border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-700 focus:ring-blue-500 focus:border-blue-500"
        >
          {showForm ? (
    <Minus className="h-4 w-4" />
  ) : (
    <Plus className="h-4 w-4" />
  )}
  <span>{showForm ? "Cancel" : "Add Task"}</span>
</button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Task Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className={`input-field rounded-md color-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 w-full"
              ${
                  formErrors.title ? "border-red-500" : ""
                }`}
                placeholder="Enter task title"
              />
              {formErrors.title && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {formErrors.title}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="input-field min-w-0  rounded-md color-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className={`input-field rounded-md color-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 w-full"
              ${
                formErrors.description ? "border-red-500" : ""
              }`}
              placeholder="Enter task description"
            />
            {formErrors.description && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {formErrors.description}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Due Date (Optional)
            </label>
            <input
              type="datetime-local"
              value={formData.dueDate}
              onChange={(e) =>
                setFormData({ ...formData, dueDate: e.target.value })
              }
              className="input-field rounded-md color-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 w-auto"
              placeholder="Select due date"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2 border-2 rounded-md border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-700 focus:ring-blue-500 focus:border-blue-500"
            >
              <Plus className="h-4 w-4" />
              <span>{editingTask ? "Update Task" : "Add Task"}</span>
            </button>
            {editingTask && (
              <button
                type="button"
                onClick={handleCancel}
                className="btn-secondary"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;
