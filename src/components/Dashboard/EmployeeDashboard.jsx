import React, { useEffect, useState } from 'react';
import Header from '../../others/Header';
import TaskNum from '../../others/TaskNum';
import TaskList from '../../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const [employeeData, setEmployeeData] = useState([]);

  // Fetch data from localStorage
  useEffect(() => {
    const fetchEmployees = () => {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      setEmployeeData(employees);
    };

    fetchEmployees();
  }, []); // Only fetch once during component mount

  // Calculate task counts
  const taskCounts = employeeData?.[0]?.tasks?.reduce(
    (counts, task) => {
      if (task.active) counts.active++;
      if (task.newTask) counts.newTask++;
      if (task.completed) counts.completed++;
      if (task.failed) counts.failed++;
      return counts;
    },
    { active: 0, newTask: 0, completed: 0, failed: 0 }
  ) || { active: 0, newTask: 0, completed: 0, failed: 0 }; // Default values if no tasks

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={employeeData} />
      {/* Pass taskCounts to TaskNum */}
      <TaskNum data={{ taskCounts }} />
      <TaskList data={employeeData?.[0] || { tasks: [] }} />
    </div>
  );
};

export default EmployeeDashboard;
