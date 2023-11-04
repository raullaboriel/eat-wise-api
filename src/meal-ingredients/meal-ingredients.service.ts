import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MealIngredient } from './schemas/meal-ingredients.schema';
import { Model } from 'mongoose';
import { CreateMealIngredientDto, UpdateMealIngredientDto } from './dto/meal-ingredients.dto';

@Injectable()
export class MealIngredientsService {
    constructor(@InjectModel(MealIngredient.name) private readonly mealIngredientModel: Model<MealIngredient>) { }

    async findAllByMealId(mealId: string): Promise<MealIngredient[]> {
        const ingredientes = this.mealIngredientModel.find({ mealId });

        return await ingredientes;
    }

    async create(newMealIngredient: CreateMealIngredientDto): Promise<MealIngredient> {
        const mealIngredient = new this.mealIngredientModel(newMealIngredient);

        return await mealIngredient.save();
    }

    async delete(id: string): Promise<MealIngredient> {
        return await this.mealIngredientModel.findByIdAndDelete(id);
    }

    async deleteByMealId(mealId: string): Promise<number> {
        return (await this.mealIngredientModel.deleteMany({ mealId })).deletedCount;
    }

    async update(id: string, updatedMealIngredient: UpdateMealIngredientDto): Promise<MealIngredient> {
        return await this.mealIngredientModel.findByIdAndUpdate(id, updatedMealIngredient, { new: true });
    }
}
