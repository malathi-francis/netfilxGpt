import { useState } from "react";
import Header from "./Header";

const Login = () =>{

    const [isSignIn,setIsSignin] = useState(true);
    const toggleSigninUp = ()=>{
        setIsSignin(!isSignIn)
    }

    return (
         <div>
        <Header />
        <div className="absolute">
       
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg" alt="logo"></img>
        </div>
        <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-75">
        <h1 className="font-bold text-3xl mb-5">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn &&(<input type="text" placeholder="Name" className="my-2 p-4 w-full rounded-md bg-white bg-opacity-5 border border-gray-500"></input>)}
            <input type="text" placeholder="Email Id" className="my-2 p-4 w-full rounded-md bg-white bg-opacity-5 border border-gray-500"></input>
            <input type="password" placeholder="password" className="my-2 p-4 w-full rounded-md bg-white bg-opacity-5 border border-gray-500"></input>
            <button className="bg-red-800 p-2 w-full my-2">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className="my-4 text-gray-500">{isSignIn ? "New to Netflix?" : "Already a user?"}<span className="text-white hover:underline cursor-pointer" onClick={toggleSigninUp}>{isSignIn ? "Sign up now." : "Sign in now."}</span></p>
        
        </form>
        </div>
    )
};

export default Login;