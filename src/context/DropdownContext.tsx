
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DropdownContextType {
  isServicesOpen: boolean;
  isTechnologiesOpen: boolean;
  setServicesOpen: (isOpen: boolean) => void;
  setTechnologiesOpen: (isOpen: boolean) => void;
  openServices: () => void;
  openTechnologies: () => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};

interface DropdownProviderProps {
  children: ReactNode;
}

export const DropdownProvider: React.FC<DropdownProviderProps> = ({ children }) => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isTechnologiesOpen, setTechnologiesOpen] = useState(false);

  const openServices = () => {
    setServicesOpen(true);
    setTechnologiesOpen(false); 
  };

  const openTechnologies = () => {
    setTechnologiesOpen(true);
    setServicesOpen(false);
  };

  const value = {
    isServicesOpen,
    isTechnologiesOpen,
    setServicesOpen,
    setTechnologiesOpen,
    openServices,
    openTechnologies,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}; 