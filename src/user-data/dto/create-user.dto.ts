import { UserExperience } from "../schemas/userdata.schema";


export class CreateUserDto{
  
    readonly userName: string;

 
    readonly firstName: string;

 
    readonly lastName: string;

    
    readonly email: string;

    readonly password: string;

   
    readonly experience: UserExperience;

}