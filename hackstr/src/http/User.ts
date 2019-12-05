import Axios from "axios";
import { environment } from "../environment/environment";

export interface IUser {
  id: number;
  email: string;
  phone: number;
  projectId: number;
}
export const getUsers = async () => {
  const users = await Axios.get<IUser[]>(environment.userUrl);
  return users.data;
};
export const getUserById = async (id: number) => {
  const user = await Axios.get<IUser>(environment.userUrl + "/" + id);
  console.log(user.data);
  return user.data;
};
export const createUser = async (iuser: IUser) => {
  const user = await Axios.post(environment.userUrl, iuser);
  return user.data;
};
export const updateUser = async (id: number, iuser: IUser) => {
  const user = await Axios.put(environment.userUrl + "/" + id, iuser);
  return user.data;
};
export const deleteUser = async (id: number) => {
  const user = await Axios.delete(environment.userUrl + "/" + id);
  return user.data;
};
