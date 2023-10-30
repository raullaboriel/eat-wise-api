import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RecipesDto {
    name: string;
    createdAt: Date;
    modifiedAt: Date;
    ingredients: string[];
}

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsArray()
    @IsNotEmpty()
    ingredients: any[];
}

export class UpdateRecipeDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsArray()
    @IsOptional()
    ingredients?: any[];
}