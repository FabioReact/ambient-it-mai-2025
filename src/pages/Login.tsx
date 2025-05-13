import { useReducer } from "react";

type UserStatusType = {
    connected: boolean,
    email: string,
    accessToken: string|undefined,
}

type Actions = {
    type: 'login'|'logout'
}

const initialState: UserStatusType = {
    connected: false,
    email: '',
    accessToken: undefined,
}

const reducer = (state: UserStatusType, action: Actions): UserStatusType => {
  switch (action.type) {
    case 'login':
        return {
            ...state,
            connected: true,
            accessToken: 'eyfddfvs.64y5.dfsdv',
            email: 'user@email.com',
        }
    case 'logout':
        return {
            ...initialState
        }
    default:
        throw new Error('Invalid type in UserStatusReducer')
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <section>
      <h1>Login</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => dispatch({ type: 'login' })}>Connect</button>
      <button>Logout</button>
    </section>
  );
};

export default Login;
