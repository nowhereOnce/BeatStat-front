// This file contains the functions that handle the login of the user.
// This endpoint automatically redirects the user to the login page of the OAuth provider.
import { API_ENDPOINTS, API_BASE_URL } from '../config';

export const handleLogin = () => {
    window.location.href = API_BASE_URL;
};

export const logout = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.LOGOUT, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      return { success: true };
    } else {
      console.error('Error al cerrar sesión');
      return { success: false };
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    return { success: false };
  }
};