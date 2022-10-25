import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../firebase/firebase.config";
import useGithub from "../Github/Github";
import useGoogle from "../Google/Google";

const Login = ({user, setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const auth = getAuth(app);

  const {test, test2} = useGoogle();
  const {handleGithubSignIn} = useGithub();

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const userInfo = userCredential.user;
    setUser(userInfo);
    // console.log(userInfo);
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
  });
  }

  return (
    <div className="mt-5">
      <div className="main-container d-flex container justify-content-between align-items-center">
        <div className="register-image image-fluid w-100  ">
          <img
            className="w-100 img-fluid image-fluid"
            src="https://img.lovepik.com/element/45009/2341.png_300.png"
            alt=""
          />
        </div>
        <div className="register-form  w-100">
          <p>{error}</p>
          <div className="input-box">
            <input
              onBlur={handleEmail}
              className="form-control p-3 m-2"
              type="email"
              placeholder="Email"
            />
            <input
              onBlur={handlePassword}
              className="form-control p-3 m-2"
              type="password"
              placeholder="password"
            />
            <p className="link ">
              <Link to="/registration" className="text-decoration-none">
                <small className="text-danger link">
                  are you new? please register
                </small>
              </Link>
              <span
                onClick={() => setModalShow(true)}
               role="button" className="ms-4 text-primary cursor-pointer">
                Forget Password?
              </span>
            </p>
            <input className="p-2" type="checkbox" />{" "}
            <span className="mb-3 ">remember me </span>
            <br />
            <button onClick={handleLogin} className="btn btn-info p-3 w-50 mt-3 fw-bold text-white">
              Login
            </button>
          </div>
          <button
           onClick={test}
           className="btn mt-3 border d-flex align-items-center justify-content-evenly p-2 m-auto">
            <img
              className="w-25 image-fluid btn-image"
              src="https://img.icons8.com/color/344/google-logo.png"
              alt=""
            />
            <p className="fw-bold">Google SignIn</p>
          </button>
          <button
           onClick={handleGithubSignIn}
           className="btn mt-3 border d-flex align-items-center justify-content-evenly p-2 m-auto">
            <img
              className="w-25 image-fluid btn-image"
              src="https://img.icons8.com/color/344/github-logo.png"
              alt=""
            />
            <p className="fw-bold">Github SignIn</p>
          </button>
        </div>

      
      </div>
    </div>
  );
};

export default Login;
