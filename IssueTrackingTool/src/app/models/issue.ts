import { Group } from "./Group.1";
import { BaseModel } from "./info";
import { Priority } from "./priority";
import { Solution } from "./solution";
import { Status } from "./status";
import { User } from "./user";

export class Issue extends BaseModel {
  id: number;
  name: string;
  status: Status;
  details: string;
  prority: Priority;
  solutions: Solution[];
  groups: Group[];
  users: User[];
}
