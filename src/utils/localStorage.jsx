const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e1@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Project Plan",
        "taskDescription": "Revise and update the project timeline",
        "taskDate": "2024-11-10",
        "category": "Planning"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review backend code for new feature",
        "taskDate": "2024-11-11",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ananya",
    "email": "e2@e.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Fix bugs reported in last testing cycle",
        "taskDate": "2024-11-10",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "User Testing",
        "taskDescription": "Conduct testing with sample users",
        "taskDate": "2024-11-09",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "e3@e.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project requirements with client",
        "taskDate": "2024-11-12",
        "category": "Meetings"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "e4@e.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Fix reported issues from last QA cycle",
        "taskDate": "2024-11-11",
        "category": "Development"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Suresh",
    "email": "e5@e.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Deployment",
        "taskDescription": "Deploy new version to production",
        "taskDate": "2024-11-08",
        "category": "Deployment"
      }
    ]
  }
];

const admin = [{
  "id": "admin",
  "email": "admin@example.com",
  "password": "adminpass",
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees, admin}
}
