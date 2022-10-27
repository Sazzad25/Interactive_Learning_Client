import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";


const useGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    // const [userInfo, setUserInfo] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const test = () => {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setUserInfo(user);
    navigate('/blog');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    };

    const test2 = () => {
        console.log('Dear Mijba');
    };

    return {test, test2, userInfo};
}

export default useGoogle;