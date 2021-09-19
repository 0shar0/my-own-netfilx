import { createContext } from 'react';

export const AuthContext = createContext({
  authenticated: false,
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ authenticated: false }}>
      {children}
    </AuthContext.Provider>
  );
};
