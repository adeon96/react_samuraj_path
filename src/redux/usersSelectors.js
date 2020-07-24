import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
}

export const getUsers = createSelector( getUsersSelector, (users) => {
  return users.filter(u => true);
})

export const getTotalUsersNumber = (state) => {
  return state.usersPage.totalUsersNumber;
}

export const getUsersPerPage = (state) => {
  return state.usersPage.usersPerPage;
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}
