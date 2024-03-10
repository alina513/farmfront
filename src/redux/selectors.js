// import { createSelector } from '@reduxjs/toolkit';
export const selectDrugs = state => state.drugs.items;
// export const selectFilter = state => state.filters.value;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;
// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectUser = state => state.auth.user;
// export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectCartItems = (state) => state.shop.items;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filters) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filters.toLowerCase())
//     );
//   }
// );
