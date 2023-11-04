import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecipeIngredient } from './schemas/recipe-ingredients.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecipeIngredientsService {
    constructor(@InjectModel(RecipeIngredient.name) private readonly recipeIngredientModel: Model<RecipeIngredient>) { }
}
