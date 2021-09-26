import { createContext, useState } from 'react';
import firebase from 'firebase/compat';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBfExKRgo-4kmiKRrrUhw-xMl_xsTfFg3w',
    authDomain: 'my-own-netflix-e8f06.firebaseapp.com',
    projectId: 'my-own-netflix-e8f06',
    storageBucket: 'my-own-netflix-e8f06.appspot.com',
    messagingSenderId: '69093396612',
    appId: '1:69093396612:web:366f60ee09872f751bb2d1',
  };
  const app = firebase.initializeApp(firebaseConfig);
  const authenticated = app.auth();
  const firestore = app.firestore();
  const [currentUser, setCurrentUser] = useState(null);

  authenticated.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user?._delegate);
    }
  });

  return (
    <AuthContext.Provider value={{ authenticated, firestore, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
