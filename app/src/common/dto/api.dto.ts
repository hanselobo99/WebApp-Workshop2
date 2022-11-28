import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MATCHES, Max, Min, MinLength } from "class-validator";


export class insertUserObject {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  emailId: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  zipCode: string;

  @IsNotEmpty()
  @MinLength(6)
  @Matches(/[a-zA-Z$@%^&*0-9]$/, {message: 'password too weak'})
  userPassword: string;
}

export class responseObject {
  status: string;
  message: string;
}

export class deleteUser {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  emailId: string;
}

export class getUser {
  status: string;
  message: string;
  data?: object;
}

export class ProductDto {
  @IsString()
  productName: string;

  @IsNumber()
  productPrice: number;
}

export class LoginDto {
  @IsString()
  emailId: string;

  @IsString()
  @MinLength(6)
  @Matches(/[a-zA-Z$@%^&*0-9]$/, {message: 'password too weak'})
  userPassword: string;
}
