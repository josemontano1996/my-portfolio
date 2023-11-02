'use client';

import { FC, ReactNode, useEffect, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';
import { useParams } from 'next/navigation';

export interface UIState {
  isSideMenuOpen: boolean;
  isContactPopUpOpen: boolean;
  lang: string;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
  isContactPopUpOpen: false,
  lang: 'en',
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const params = useParams();

  useEffect(() => {
    let locale = params.locale as string;
    if (!(locale === 'en' || locale === 'de' || locale === 'es')) {
      locale = 'en';
    }
    dispatch({ type: 'UI-Set lang', payload: locale });
  }, [params]);

  const toggleSideMenu = () => {
    dispatch({ type: 'UI-Toggle Side Menu' });
  };

  const toggleContactPopUp = () => {
    dispatch({ type: 'UI-Toggle Contact PopUp' });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        toggleSideMenu,
        toggleContactPopUp,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
