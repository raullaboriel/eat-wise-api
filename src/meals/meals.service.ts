import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Meal } from './schemas/meals.schema';
import { Model } from 'mongoose';
import { CreateMealDto } from './dto/meals.dto';
import { MealIngredientsService } from 'src/meal-ingredients/meal-ingredients.service';

@Injectable()
export class MealsService {
    constructor(
        @InjectModel(Meal.name) private readonly mealModel: Model<Meal>,
        private readonly mealIngredientService: MealIngredientsService
    ) { }

    async findAll(userId: string): Promise<Meal[]> {
        const meals = this.mealModel.find({ userId });

        return await meals;
    }

    async findById(mealId: string, userId: string): Promise<Meal> {
        const meal = await this.mealModel.findOne({ _id: mealId, userId });

        return meal;
    }

    async create(newMeal: CreateMealDto): Promise<Meal> {
        const createdMeal = new this.mealModel(newMeal);

        return await createdMeal.save();
    }

    async delete(mealId: string, userId: string): Promise<Meal> {
        const meal = await this.mealModel.findByIdAndDelete({ _id: mealId, userId });
        await this.mealIngredientService.deleteByMealId(mealId);

        return {
            ...meal.toJSON(),
        }
    }
}
