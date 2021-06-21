import { getFromLocalStorage } from '../../container/utils/dataService';

// initial data
const initialData = {
  users: getFromLocalStorage(),
};

const userReducers = (state = initialData, action) => {
  switch (action.type) {
    //   add the user
    case 'ADD_USER': {
      const { id, data } = action.payload;
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: id,
            ...data,
          },
        ],
      };
    }

    // delete the user
    case 'DELETE_USER': {
      const newUser = state.users.filter((user) => user.id !== action.id);
      return {
        ...state,
        users: newUser,
      };
    }

    // update the user
    case 'UPDATE_USER': {
      const { id, updatedUser } = action.payload;
      const editUser = state.users.map((user) =>
        user.id === id ? updatedUser : user
      );
      return {
        ...state,
        users: editUser,
      };
    }

    // default handle & return the current state
    default:
      return state;
  }
};

export default userReducers;
