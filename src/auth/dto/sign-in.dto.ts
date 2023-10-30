import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class SignInDto {
    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}