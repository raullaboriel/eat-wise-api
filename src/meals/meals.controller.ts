import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Req, UseGuards } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealIngredientsService } from 'src/meal-ingredients/meal-ingredients.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { Request } from 'express';
import { CreateMealDto } from './dto/meals.dto';

@UseGuards(AuthGuard)
@Controller('meals')
export class MealsController {
    constructor(
        private mealsService: MealsService,
        private mealIngredientService: MealIngredientsService,
        private authService: AuthService
    ) { }

    @Get()
    async getMeals(@Req() req: Request) {
        const userId = (await this.authService.extractPayload(req)).sub;
        const meals = await this.mealsService.findAll(userId);

        const mealIngredientPromises = meals.map(async (meal) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { userId, ...restMeal } = meal.toJSON();

            const ingredients = await this.mealIngredientService.findAllByMealId(meal._id);
            return {
                ...restMeal,
                ingredients
            };
        });

        const mealsWithIngredients = await Promise.all(mealIngredientPromises);
        return mealsWithIngredients;
    }

    @Post()
    async addMeal(@Req() req: Request, @Body() meal: Omit<CreateMealDto, 'userId'>) {
        const userId = (await this.authService.extractPayload(req)).sub;

        const createdMeal = await this.mealsService.create({
            userId,
            ...meal
        });

        const mealIngredients = meal.ingredients.map(async (ingredient) => {
            return await this.mealIngredientService.create({
                mealId: createdMeal._id,
                fdcId: ingredient.fdcId,
                amount: ingredient.amount
            });
        });

        const mealIngredientsCreated = await Promise.all(mealIngredients);

        return {
            ...createdMeal.toJSON(),
            ingredients: mealIngredientsCreated
        }
    }

    @Delete(':id')
    async deleteMeal(@Req() req: Request, @Param('id') mealId: string) {
        const userId = (await this.authService.extractPayload(req)).sub;

        const mealDeleted = await this.mealsService.delete(mealId, userId);

        if (!mealDeleted) {
            throw new NotFoundException('Meal not found');
        }

        await this.mealIngredientService.deleteByMealId(mealId);

        return mealDeleted;
    }
}
