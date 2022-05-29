import { User } from "./user";

export class Group{
  id: number;
  name: string;
  leader: User;
  users: User[];
}
