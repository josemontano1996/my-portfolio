'use client';

import { createContext } from 'react';

interface ContextProps {
  isSideMenuOpen: boolean;
  isContactPopUpOpen: boolean;
  
  //Methods
  toggleSideMenu: () => void;
  toggleContactPopUp: () => void;
}

export const UIContext = createContext({} as ContextProps);
