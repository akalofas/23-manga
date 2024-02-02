export const selectIsAuthenticated = state => !!state.auth.user;
export const selectUserRole = state => state.auth.user?.userRole || 'guest';
export const selectUser = state => state.auth.user;
