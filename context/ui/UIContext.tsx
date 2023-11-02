'use client';

import { createContext } from 'react';

interface ContextProps {
  isSideMenuOpen: boolean;
  isContactPopUpOpen: boolean;
  lang: string;

  //Methods
  toggleSideMenu: () => void;
  toggleContactPopUp: () => void;
}

export const UIContext = createContext({} as ContextProps);
