import { Module } from '@nestjs/common';
import { RecipeIngredientsService } from './recipe-ingredients.service';
import { RecipeIngredientsController } from './recipe-ingredients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeIngredient, RecipeIngredientSchema } from './schemas/recipe-ingredients.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: RecipeIngredient.name,
                schema: RecipeIngredientSchema
            }
        ])
    ],
    providers: [RecipeIngredientsService],
    controllers: [RecipeIngredientsController]
})
export class RecipeIngredientsModule { }
