import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
// In React, the useEffect hook is used to handle side effects in functional components.
//  Side effects are operations that affect something outside the scope of the function being executed,
//  such as fetching data from an API, manipulating the DOM directly, setting up a subscription, 
// or updating the document title.

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios

  //this means that by default every request that we send 
  //headers will be there and it will comprise of the token
  axios.defaults.headers.common['Authorization']=auth?.token

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }

    //The below comment ensures that the data does not go into the localStorage 

    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };