import React, { useContext, useEffect } from "react";
import Routing from "./Pages/Router.jsx";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { auth } from "./Utility/Firebase.js";
import { Type } from "./Utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
}

export default App;

// import React from 'react'
// import Header from './Components/Header/Header'
// import './App.css'
// import Routing from './Pages/Router'
// function App() {

//   // return (
//   //   <div>
//   //     <Routing/>
//   //   </div>
//   // )
// }

// export default App
