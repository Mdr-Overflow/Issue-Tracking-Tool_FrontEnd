import { BaseModel } from "./info";

export class ApiKey extends BaseModel{
  id: number;
  username: string;
  access_token: string;
  refresh_token: string;
}
