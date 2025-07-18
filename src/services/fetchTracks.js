import { API_ENDPOINTS } from '../config';

export const fetchTracks = async (timeRange) => {
  const response = await fetch(
    `${API_ENDPOINTS.TOP_TRACKS}?time_range=${timeRange}`,
    { credentials: 'include' }
  );
  if (!response.ok) throw new Error('Error fetching tracks');
  return response.json();
};