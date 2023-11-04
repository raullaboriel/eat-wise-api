import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Meal } from './schemas/meals.schema';
import { Model } from 'mongoose';
import { CreateMealDto } from './dto/meals.dto';

@Injectable()
export class MealsService {
    constructor(@InjectModel(Meal.name) private readonly recipeModel: Model<Meal>) { }

    async findAll(userId: string): Promise<Meal[]> {
        const meals = this.recipeModel.find({ userId });

        return await meals;
    }

    async create(newMeal: CreateMealDto): Promise<Meal> {
        const createdMeal = new this.recipeModel(newMeal);

        return await createdMeal.save();
    }

    async delete(mealId: string, userId: string): Promise<Meal> {
        return await this.recipeModel.findByIdAndDelete({ _id: mealId, userId });
    }
}
