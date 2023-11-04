import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';
import { RecipeIngredientsModule } from './recipe-ingredients/recipe-ingredients.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MealsModule } from './meals/meals.module';
import { GendersModule } from './genders/genders.module';
import { MealIngredientsModule } from './meal-ingredients/meal-ingredients.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://raul:yRfongrFAJ7cJCsh@eat-wise.knpmjxi.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'eat-wise',
      }
    ),
    RecipesModule,
    RecipeIngredientsModule,
    UsersModule,
    AuthModule,
    MealsModule,
    GendersModule,
    MealIngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
