import { IsNotEmpty } from "class-validator";

export class RecipesDto {
    name: string;
    createdAt: Date;
    modifiedAt: Date;
    ingredients: string[];
}

export class CreateRecipeDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    ingredients: IngredientDto[];
}

export class IngredientDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    amount: number;
}