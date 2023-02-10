export interface IUser {
  username: string;
  email: string;
}

export interface IDispatchUser extends Partial<IUser> {
  type: TypeDispatchUser;
}

type TypeDispatchUser = "create" | "edit";
