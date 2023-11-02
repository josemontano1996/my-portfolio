import { UIState } from './UIProvider';

type UIActionType = { type: 'UI-Toggle Side Menu' } | { type: 'UI-Toggle Contact PopUp' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI-Toggle Side Menu':
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    case 'UI-Toggle Contact PopUp':
      return {
        ...state,
        isContactPopUpOpen: !state.isContactPopUpOpen,
      };
    default:
      return state;
  }
};
