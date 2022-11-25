import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
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
