import { createContext, useEffect, useState } from 'react';
import { chek } from '../../Api/userApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(!!currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      chek().then((r) => {
        setCurrentUser(r);
        setLoading(false);
      });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ currentUser, auth, setCurrentUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
