import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Meal, MealSchema } from './schemas/meals.schema';
import { MealIngredientsModule } from 'src/meal-ingredients/meal-ingredients.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MealIngredientsModule,
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Meal.name,
        schema: MealSchema
      }
    ])
  ],
  controllers: [MealsController],
  providers: [MealsService]
})
export class MealsModule { }
