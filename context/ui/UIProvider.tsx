'use client';

import { FC, ReactNode, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState {
  isSideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: 'UI-Toggle Side Menu' });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        toggleSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
