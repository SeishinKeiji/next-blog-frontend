import React, { createContext, useContext, useReducer } from "react";
import { IDispatchUser, IUser } from "types/user.interface";
import { getFromStorage, setToStorage } from "src/utility";

const UserContext = createContext<IUser | null>(null);
const UserDispatchContext = createContext<React.Dispatch<IDispatchUser> | null>(null);

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const userFromStorage = getFromStorage("user");
  const [user, dispatch] = useReducer(UserReducer, userFromStorage ? JSON.parse(userFromStorage) : null);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useDispatchUser: () => React.Dispatch<IDispatchUser> = () => useContext(UserDispatchContext) as React.Dispatch<IDispatchUser>;

function UserReducer(user: IUser, action: IDispatchUser) {
  const newData = (({ type, ...data }) => data)(action);

  switch (action.type) {
    case "edit":
    case "create":
      const data = { ...user, ...newData };
      setToStorage("user", JSON.stringify(data));
      return data;

    default:
      throw Error("Unknown action: " + action.type);
  }
}
