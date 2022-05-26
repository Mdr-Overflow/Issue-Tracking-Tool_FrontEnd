import { BaseModel } from "./info";
import { User } from "./user";

export class Group extends BaseModel{
  id: number;
  name: string;
  users: User[];
}
