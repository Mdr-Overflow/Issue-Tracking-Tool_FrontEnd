import { Role } from "./role";

export class User{
 id: string;
 username: string;
 name: string;
 email:string;
 groupId: string;
 groupName: string;
 roles: Role[];


 public getRolesList(){
   var list :string[] = [];

   if(this.roles){
    this.roles.forEach(role=>{
      list.push(role.name);
    });

   }
   return list;
 }
}
