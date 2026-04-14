import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Container, GateMovement } from './types';

interface ContainerContextType {
  containers: Container[];
  movements: GateMovement[];
  updateContainer: (updatedContainer: Container) => void;
  // ... other methods
}

export function ContainerProvider({ children }: { children: ReactNode }) {
  const [containers, setContainers] = useState<Container[]>([]);
  
  const updateContainer = (updatedContainer: Container) => {
    setContainers(prev => prev.map(c => 
      c.id === updatedContainer.id ? updatedContainer : c
    ));
  };

  return (
    <ContainerContext.Provider value={{ containers, updateContainer }}>
      {children}
    </ContainerContext.Provider>
  );
}