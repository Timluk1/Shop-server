import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthDto {
    @IsString({ message: "Email is required" })
    @IsEmail({}, { message: "Invalid email" })
    email: string;

    @IsString({ message: "Password is required" })
    @MinLength(6, { message: "Password must be at least 6 characters" })
    password: string;
}
