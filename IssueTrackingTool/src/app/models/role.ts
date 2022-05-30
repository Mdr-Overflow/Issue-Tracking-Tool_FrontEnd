import { BaseModel } from "./info";
import { Priviliges } from "./priviliges";

export class Role extends BaseModel{
  id: string;
  name: string;
  privileges: Priviliges[];
}
