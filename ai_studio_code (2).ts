import React, { createContext, useContext, useState } from 'react';
import { User } from './types';

const DEMO_USERS = {
  'owner': { pass: 'owner123', role: 'OWNER' },
  // ... other roles
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username, password) => {
    if (DEMO_USERS[username]?.pass === password) {
      setUser({ username, role: DEMO_USERS[username].role, name: username });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}