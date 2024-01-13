// POST request method
import {  setCookie } from "./Cookies";

export const cookieAssign = ({ SetVarified }) => {
  const JSONToken = localStorage.getItem("token");
  const userJSON = localStorage.getItem("user");

  if (JSONToken) {
    const token = JSON.stringify(JSONToken);
    const userDetails = JSON.parse(userJSON);

    if (token && userDetails) {
      // Call SetVarified with true if conditions are met
      SetVarified(true);
      return true;
    }
  }

  // If any condition fails, return false
  return false;
};

export const loginPost = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    const { token, userDetails } = responseData;

    // Assume you have a setCookie function
    setCookie('user', userDetails, 1);
    setCookie('token', token, 1);

    console.log(token);
    localStorage.setItem("token", token);
    console.log(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
    return responseData;
  } catch (error) {
    console.error('Error making POST request:', error.message);
    throw error;
  }
};




export const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You can include additional headers if needed, like authorization headers
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        // Handle non-successful responses
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error making POST request:', error.message);
      throw error;
    }
  };
  

  // GET request method
  export const getData = async (url) => {
    console.log(url)
    try {
      const Authorization = localStorage.getItem("token");
      console.log(Authorization)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Authorization}`,
        },
      });
  
      if (!response.ok) {
        // Handle non-successful responses
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error making GET request:', error.message);
      throw error;
    }
  };
  
  