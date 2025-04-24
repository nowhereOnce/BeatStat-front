// This file contains the functions that handle the login of the user.
// This endpoint automatically redirects the user to the login page of the OAuth provider.

export const handleLogin = () => {
    window.location.href = 'http://localhost:8000/';
};