import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the task object
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Get employees from localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Update the employees with the new task
    const updatedEmployees = employees.map((employee) => {
      if (employee.firstName === assignTo) {
        // Add the task to the matching employee's tasks
        return {
          ...employee,
          tasks: [...(employee.tasks || []), task],
        };
      }
      return employee;
    });

    // Save updated employees back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Debugging logs
    console.log('Updated Employees:', updatedEmployees);

    // Clear form fields
    setTaskTitle('');
    setCategory('');
    setAssignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div className="mt-10 bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Create New Task
        </h2>
        <form className="space-y-6" onSubmit={submitHandler}>
          <div className="grid grid-cols-2 gap-6">
            {/* Task Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-600 mb-2"
              >
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                id="title"
                type="text"
                placeholder="Book a ticket"
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-lg font-medium text-gray-600 mb-2"
              >
                Due Date
              </label>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                id="date"
                type="date"
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-lg font-medium text-gray-600 mb-2"
              >
                Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
                id="description"
                cols="30"
                rows="3"
                placeholder="Describe your task"
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            {/* Assignee */}
            <div>
              <label
                htmlFor="assignee"
                className="block text-lg font-medium text-gray-600 mb-2"
              >
                Assign To
              </label>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                id="assignee"
                type="text"
                placeholder="Employee Name"
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-lg font-medium text-gray-600 mb-2"
              >
                Category
              </label>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                id="category"
                type="text"
                placeholder="e.g., design, dev, management"
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
