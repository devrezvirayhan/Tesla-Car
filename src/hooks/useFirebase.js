import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from './../Pages/Login/Firebase/Firebase.init';



// initializeFirebase APP
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
const [admin, setAdmin] = useState(false)



    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
               //SAVE USER TO DATABASE
               SaveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });


                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
        ;
    }


    const loginUser = (email, password, location,
        histroy) => {
        console.log(email, password)
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                histroy.replace(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    const signWithGoogle = (location,
        histroy) => {
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                sessionStorage.setItem("email" , result.user.email)
                SaveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // User Present 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    useEffect(()=>{
        fetch('')
    },[user.email])


    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));

    }

    const SaveUser = (email, displayName, method)=>{
        const user ={email, displayName};
        fetch('http://localhost:5000/users',{
            method:method,
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])


    return {
        user,
        isLoading,
        registerUser,
        admin,
        logout,
        signWithGoogle,
        loginUser,
        authError,

    }




}


export default useFirebase;