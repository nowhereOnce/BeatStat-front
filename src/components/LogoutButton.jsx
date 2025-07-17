import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      // Llamar al endpoint de logout en el backend
      const response = await fetch('http://localhost:8000/logout', {
        method: 'POST',
        credentials: 'include', // Importante para incluir cookies
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        // Redirigir a la página de inicio después del logout exitoso
        navigate('/');
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
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