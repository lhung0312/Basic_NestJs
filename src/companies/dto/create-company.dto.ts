import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  //class là {}
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  description: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

}
