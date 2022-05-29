import { BaseModel } from "./info";
import { Priviliges } from "./priviliges";

export class Role extends BaseModel{
  id: number;
  name: string;
  priviliges: Priviliges[];
}
