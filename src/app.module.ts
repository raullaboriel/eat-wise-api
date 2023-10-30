import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://raul:yRfongrFAJ7cJCsh@eat-wise.knpmjxi.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'eat-wise',
      }
    ),
    RecipesModule,
    IngredientsModule,
    UsersModule,
    AuthModule,
    MealsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
