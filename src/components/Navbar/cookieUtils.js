import Cookies from 'js-cookie';

// Function to retrieve the username from the cookie
export function getUsernameFromCookie() {
  return Cookies.get('username') || '';
}