import { Module } from '@nestjs/common';
import { MealIngredientsController } from './meal-ingredients.controller';
import { MealIngredientsService } from './meal-ingredients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MealIngredient, MealIngredientSchema } from './schemas/meal-ingredients.schema';

@Module({
    imports: [
        MealIngredientsModule,
        MongooseModule.forFeature([
            {
                name: MealIngredient.name,
                schema: MealIngredientSchema
            }
        ])
    ],
    controllers: [MealIngredientsController],
    providers: [MealIngredientsService],
    exports: [MealIngredientsService]
})
export class MealIngredientsModule { }
