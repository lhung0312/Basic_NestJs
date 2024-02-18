import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {  //class là {}
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    name: string;
    address: string

} 

