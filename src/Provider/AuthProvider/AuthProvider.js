import { createContext, useEffect, useState } from 'react';
import { chek } from '../../Api/userApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(!!currentUser);
  }, [currentUser]);

  useEffect(() => {
    chek().then((r) => {
      setCurrentUser(r);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, auth, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
