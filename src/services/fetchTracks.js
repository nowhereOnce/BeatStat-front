export const fetchTracks = async (timeRange) => {
    const response = await fetch(
        `http://localhost:8000/me/top-tracks?time_range=${timeRange}`, 
        {credentials: 'include'}
    );
    if (!response.ok) throw new Error('Error fetching posts');
    return response.json();
};