import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Fetch the logged-in user from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      // Set the user's first name
      setFirstName(userData?.data?.firstName || 'Admin');
    }
  }, []); // Only run on component mount

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload(); // Optionally reload if needed
  };

  return (
    <div className='flex items-center justify-between '>
      <h1 className='text-2xl text-white font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{firstName} 👋</span>
      </h1>
      <button
        onClick={logoutUser}
        className='rounded-md bg-red-500 text-white text-lg px-5 py-2'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
