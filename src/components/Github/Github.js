import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";

// Github signing
const useGithub = () =>{
    const auth = getAuth(app);
    const githubProvider = new GithubAuthProvider();
    const [userInfo, setUserInfo] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            
            setUserInfo(user);
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.error ('error: ', error)
        })
    }

    return{handleGithubSignIn, userInfo};
}

export default useGithub;