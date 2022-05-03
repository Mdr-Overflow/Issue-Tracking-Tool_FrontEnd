import { BaseModel } from "./info";

export class ApiKey extends BaseModel{
  id: number;
  apiKey: string;
  secretKet: string;
}
