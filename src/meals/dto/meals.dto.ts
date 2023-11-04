import { IsArray, IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class IngredientDto {
    @IsNumber()
    fdcId: number;

    @IsNumber()
    amount: number;
}

export class CreateMealDto {
    @IsDate()
    @IsOptional()
    date?: Date;

    @IsString()
    userId: string;

    @IsArray()
    ingredients: IngredientDto[];
}