// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from 'firebase/auth';
// import { useEffect, useState } from 'react';
// import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

// initializeAuthentication();

// const useFirebase = () => {
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLogin, setIsLogin] = useState(false);

//   const auth = getAuth();

//   const handleRegistration = (event) => {
//     event.preventDefault();
//     if (password.length < 6) {
//       setError('Password Must be at least 6 characters long.');
//       return;
//     } else if (
//       !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
//         password
//       )
//     ) {
//       setError(
//         ' Minimum eight characters, at least one letter, one number and one special character needed'
//       );
//       return;
//     }
//     isLogin ? processLogin(email, password) : createNewUser(email, password);
//   };

//   const processLogin = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         setError('');
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   const createNewUser = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         setError('');
//         verifyEmail();
//         setUserName();
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   const setUserName = () => {
//     updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
//   };

//   const verifyEmail = () => {
//     sendEmailVerification(auth.currentUser).then((result) => {
//       console.log(result);
//     });
//   };

//   const toggleLogin = (event) => {
//     setIsLogin(event.target.checked);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleResetPassword = () => {
//     sendPasswordResetEmail(auth, email).then((result) => {});
//   };

//   const signInUsingGoogle = () => {
//     setIsLoading(true);
//     const googleProvider = new GoogleAuthProvider();

//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         setUser(result.user);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   // observe user state change
//   useEffect(() => {
//     const unsubscribed = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser({});
//       }
//       setIsLoading(false);
//     });
//     return () => unsubscribed;
//   }, []);

//   const logOut = () => {
//     setIsLoading(true);
//     signOut(auth)
//       .then(() => {})
//       .finally(() => setIsLoading(false));
//   };

//   return {
//     user,
//     isLoading,
//     signInUsingGoogle,
//     logOut,
//     toggleLogin,
//     handleNameChange,
//     handlePasswordChange,
//     handleEmailChange,
//     handleResetPassword,
//     handleRegistration,
//     error,
//     isLogin,
//   };
// };

// export default useFirebase;

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
