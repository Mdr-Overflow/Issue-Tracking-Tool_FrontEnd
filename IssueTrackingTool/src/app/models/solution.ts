import { BaseModel } from "./info";
import { Issue } from "./issue";
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
  issueName: string;
  collaborators: User[];

  public getUsersList(){
    var list :string[] = [];

    if(this.collaborators){
     this.collaborators.forEach(user=>{
       list.push(user.username);
     });

    }
    return list;
  }
}
