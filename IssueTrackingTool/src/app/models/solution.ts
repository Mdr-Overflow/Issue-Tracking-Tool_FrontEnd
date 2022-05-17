import { BaseModel } from "./info";
import { Type } from "./type";
import { User } from "./user";

export class Solution extends BaseModel{
  id: number;
  name: string;
  description: string;
  isFinal: boolean;
  isAccepted: boolean;
  type: Type;
  content: string;
  owner: User;
  collaborators: User[];
}
