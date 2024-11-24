import React from 'react';
import Header from '../../others/Header';
import CreateTask from '../../others/CreateTask';
import AllTasks from '../../others/AllTasks';
const AdminDashboard = (props) => {
  return (
    <div className="h-full w-full p-10 bg-gray-900 min-h-screen">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTasks/>
    </div>
  );
};

export default AdminDashboard;
