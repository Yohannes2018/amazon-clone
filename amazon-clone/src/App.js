// import React, { useContext, useEffect } from "react";
// import Routing from "./Router.jsx";
// import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
// import { auth } from "./Utility/Firebase.js";
// import { Type } from "./Components/DataProvider/Type.jsx";

// function App() {
//   const [{ user }, dispatch] = useContext(DataContext);
// console.log(user);

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: Type.SET_USER,
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: Type.SET_USER,
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return <Routing />;
// }

// export default App;
