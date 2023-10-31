import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, IngredientSchema } from './schemas/ingredients.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Ingredient.name,
                schema: IngredientSchema
            }
        ])
    ],
    providers: [IngredientsService],
    controllers: [IngredientsController]
})
export class IngredientsModule { }
