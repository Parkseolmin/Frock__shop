function login(id, password) {
  return (dispatch, getState) => {
    console.log('login success 액션');
    dispatch({ type: 'LOGIN_SUCCESS', payload: { id, password } });
  };
}

export const authenticateAction = { login };
