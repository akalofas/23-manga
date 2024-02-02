export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    if (action.type.startsWith('auth/')) {
      const newState = store.getState().auth;
      localStorage.setItem('userInfo', JSON.stringify(newState.user));
    }
    return result;
  };
  