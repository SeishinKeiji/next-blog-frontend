export interface IUser {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface IDispatchUser extends Partial<IUser> {
  type: TypeDispatchUser;
}

type TypeDispatchUser = "create" | "edit";
