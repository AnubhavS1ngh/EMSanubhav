import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize with an empty employees array
  const [userData, setUserData] = useState({ employees: [] });

  useEffect(() => {
    // Fetch employees from localStorage
    const { employees } = getLocalStorage();
    setUserData({ employees });
  }, []); // Runs only once, on component mount

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
