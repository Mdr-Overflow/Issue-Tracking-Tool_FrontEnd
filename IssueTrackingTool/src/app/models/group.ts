import { BaseModel } from "./info";
import { User } from "./user";

export class UserGroup extends BaseModel{
  id: number;
  name: string;
  users: User[];
}
