import React, { createContext } from "react";

export const AuthProvider = createContext();
const UserContext = ({ children }) => {
  const ProviderInfo = {};
  return (
    <div>
      <AuthProvider.Provider value={ProviderInfo}>
        {children}
      </AuthProvider.Provider>
    </div>
  );
};

export default UserContext;
