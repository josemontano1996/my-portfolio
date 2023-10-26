import { UIState } from './UIProvider';

type UIActionType = { type: 'UI-Toggle Side Menu' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI-Toggle Side Menu':
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    default:
      return state;
  }
};
