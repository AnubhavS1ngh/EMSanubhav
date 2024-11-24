import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './others/Header'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  setLocalStorage();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUser(userData.data)
      }
    },[])
  

  const handleLogin = (email,password) =>{
    if(email == 'a@a.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee =  userData?.employees.find((e)=> email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    }
    else{
      alert("User not verified");
      console.log("Invalid user");
    }
  }
 

  return (
    <div>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data = {loggedInUser}/> : null)}
    </div>
  )
}

export default App