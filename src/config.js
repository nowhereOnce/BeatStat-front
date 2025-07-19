const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/login`,
  LOGOUT: `${API_BASE_URL}/logout`,
  TOP_TRACKS: `${API_BASE_URL}/me/top-tracks`,
};

export { API_BASE_URL };