import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext); // Access global data from context

  // Function to update task counts dynamically
  const updateTaskCounts = (employees) => {
    return employees.map((employee) => {
      const taskCounts = employee.tasks.reduce(
        (counts, task) => {
          if (task.active) counts.active++;
          if (task.newTask) counts.newTask++;
          if (task.completed) counts.completed++;
          if (task.failed) counts.failed++;
          return counts;
        },
        { active: 0, newTask: 0, completed: 0, failed: 0 }
      );
      return { ...employee, taskCounts }; // Attach updated task counts
    });
  };

  // Automatically update task counts whenever `userData` changes
  useEffect(() => {
    if (userData?.employees) {
      const updatedEmployees = updateTaskCounts(userData.employees);
      setUserData({ ...userData, employees: updatedEmployees }); // Update global context
    }
  }, [userData, setUserData]); // Effect runs when `userData` changes

  return (
    <div className="mt-8 p-5 overflow-auto">
      <div className="text-white px-5 py-4 mb-3 bg-red-500 rounded-md flex justify-between">
        <h3 className="w-1/5 font-semibold">Employee</h3>
        <h3 className="w-1/5 font-semibold">New Task</h3>
        <h3 className="w-1/5 font-semibold">Active Task</h3>
        <h3 className="w-1/5 font-semibold">Completed Task</h3>
        <h3 className="w-1/5 font-semibold">Failed Task</h3>
      </div>

      <div>
        {userData?.employees?.map((employee, index) => (
          <div
            key={index}
            className="text-white px-5 py-4 mb-3 rounded-md flex justify-between"
          >
            <h3 className="w-1/5">{employee.firstName}</h3>
            <h3 className="w-1/5 text-blue-600">{employee.taskCounts?.newTask}</h3>
            <h3 className="w-1/5 text-yellow-400">{employee.taskCounts?.active}</h3>
            <h3 className="w-1/5 text-green-600">{employee.taskCounts?.completed}</h3>
            <h3 className="w-1/5 text-red-600">{employee.taskCounts?.failed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
