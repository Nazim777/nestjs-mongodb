import { IsNotEmpty, IsString } from "class-validator"

export class CreateProfileDto{

    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsNotEmpty()
    lastName:string

    @IsString()
    @IsNotEmpty()
    age:string

    @IsString()
    @IsNotEmpty()
    dob:string
}