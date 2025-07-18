import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { logout } from '../services/auth';

const LogoutButton = () => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className='m-2 flex justify-center cursor-pointer pt-1 opacity-50 hover:opacity-100 transition-color duration-200 ease-in-out hover:text-white'
    >
      <LogOut size={20} />
    </button>
  );
};

export default LogoutButton;