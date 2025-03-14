import React, { useState, useContext } from 'react'
import classes from './Signup.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import{ auth } from '../../Utility/Firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ClipLoader } from "react-spinners";
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  })
 const [{user}, dispatch] = useContext(DataContext);
 const navigate = useNavigate();
 const navStateData = useLocation();
  console.log(navStateData);
  console.log(user);
  
  const authHandler = async(e) => {
    e.preventDefault();
   console.log(e.target.name);
   if(e.target.name == "signin") {
//firebase auth
setLoading({...loading, signIn: true});
signInWithEmailAndPassword(auth,email,password)
.then((userInfo)=>{
  //console.log(userInfo);
  dispatch({
    type: Type.SET_USER,
    user: userInfo.user,
  });
  setLoading({...loading, signIn: false});
  navigate(navStateData?.state?.redirect || "/")
})
.catch((error)=>{
  setError(error.message)
  setLoading({...loading, signIn: false});
  });
   }
   else{
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth,email,password)
      .then((userInfo)=>{
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, signUp: false});
       navigate(navStateData?.state?.redirect || "/");
      })
      .catch((error)=>{
       setError(error.message)
        setLoading({...loading, signUp: false});
      });
   }
  };
//console.log(email,password);
  return (
    <section className={classes.login}>
      {/* {logo} */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/AMAZON.svg/640px-AMAZON.svg.png"
          alt=""
        />
      </Link>

      {/* {form} */}

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small 
        style={{
          color:"red",
          padding:"5px",
          textAlign:"center",
          fontWeight:"bold",
          }}>
          {navStateData?.state?.msg}
          </small>)}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="Email"
            />
            {/* this setup is controled input */}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signinButton}
          >
       
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* {agreement} */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* {create account button} */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {/* {error} */}
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
  
}


export default Auth;