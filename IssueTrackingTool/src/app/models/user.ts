import { Role } from "./role";

export class User{
 username: string;
 name: string;
 email:string;
 groupId: string;
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
