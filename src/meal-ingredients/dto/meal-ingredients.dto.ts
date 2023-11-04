import { IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";

export class CreateMealIngredientDto {
    @IsNotEmpty()
    @IsString()
    mealId: string;

    @IsNotEmpty()
    @IsNumber()
    fdcId: number;

    @IsNotEmpty()
    @IsNumber()
    amount: number;
}

export class UpdateMealIngredientDto {
    @IsOptional()
    amount: number;
}