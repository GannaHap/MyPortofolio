import ActionType from './ActionType';

const initialState = {
  display: 'Dashboard',
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === ActionType.CHANGE_DISPLAY) {
    const listMenu = document.querySelectorAll('.list-menu .list');
    const listTarget = action.event;

    listMenu.forEach((list) => {
      list.classList.remove('active');
      if (listTarget.getAttribute('name') === list.getAttribute('name')) {
        list.classList.add('active');
      }
    });

    return {
      ...state,
      display: action.name,
    };
  }

  return state;
};
