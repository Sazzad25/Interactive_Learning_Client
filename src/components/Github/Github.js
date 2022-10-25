import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react";
import app from "../../firebase/firebase.config";

const useGithub = () =>{
    const auth = getAuth(app);
    const githubProvider = new GithubAuthProvider();
    const [userInfo, setUserInfo] = useState('');

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUserInfo(user);
        })
        .catch(error =>{
            console.error ('error: ', error)
        })
    }

    return{handleGithubSignIn, userInfo};
}

export default useGithub;