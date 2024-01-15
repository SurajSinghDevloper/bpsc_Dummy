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

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userDetails));
    return responseData;
  } catch (error) {
    console.error('Error making POST request:', error.message);
    throw error;
  }
};




export const postData = async (url, data) => {
    try {
      const Authorization = localStorage.getItem("token");
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${Authorization}`,
        },
        body: data,
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
    try {
      const Authorization = localStorage.getItem("token");
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
  
  export const OtpPostData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data, // Include the data in the request body
            // headers: {
            //     Authorization: `Bearer ${Authorization}`,
            // },
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

export const registrationPostData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Throw an error to be caught in the calling function
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Log the response for debugging purposes

    // Check if the response has any content before trying to parse it as JSON
    const responseData = response.status !== 204 ? await response.json() : null;

    return responseData;
  } catch (error) {
    console.error('Error making POST request:', error.message);
    // Rethrow the error to be caught in the calling function
    throw error;
  }
};

