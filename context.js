import React,{useEffect,useRef} from 'react'; 
const UserStateContext = React.createContext();

export function UserProvider({ children }) {
    const [status] = React.useState('loading');   
     
     

    const state = { 
        status, 
    };

    return (
        <UserStateContext.Provider value={state}>
            {children}
        </UserStateContext.Provider>
    );
}

export function useUserState() {
  const state = React.useContext(UserStateContext);

  if (state === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }

  return state;
}
