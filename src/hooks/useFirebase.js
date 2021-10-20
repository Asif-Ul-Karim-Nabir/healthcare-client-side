import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

    // google signIn method 
    const singInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
            setError('')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    useEffect(()=>{
       const unSubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        });
        return ()=> unSubscribed;
    },[])
    const logOut = () =>{
        signOut (auth)
        .then(()=>{
            setUser({})
        })
    }
    return {
        user,
        error,
        name,
        isLogin,
        processLogin,
        registerNewUser,
        toggleLogin,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        singInUsingGoogle,
        logOut
    };
};

export default useFirebase;