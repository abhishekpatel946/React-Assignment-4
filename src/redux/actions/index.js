export const addUser = (data) => {
  return {
    type: 'ADD_USER',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id: id,
  };
};

export const updateUser = (id, updatedUser) => {
  return {
    type: 'UPDATE_USER',
    payload: {
      id: id,
      updatedUser: updatedUser,
    },
  };
};
