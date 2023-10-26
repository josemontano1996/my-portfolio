'use client';

import { createContext } from 'react';

interface ContextProps {
  isSideMenuOpen: boolean;

  //Methods
  toggleSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
