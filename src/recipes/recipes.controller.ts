import { Controller, Get, Post, Delete, Put, Param, Body, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto, UpdateRecipeDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('recipes')
export class RecipesController {
    constructor(private recipesService: RecipesService) { };

    @Get()
    @UseGuards(AuthGuard)
    getRecipes() {
        return this.recipesService.findAll();
    }

    @Get(':id')
    getRecipeById(@Param('id') id: string) {
        return this.recipesService.findById(id);
    }

    @Post()
    createRecipe(@Body() newRecipe: CreateRecipeDto) {
        return this.recipesService.create(newRecipe);
    }

    @Delete(':id')
    deleteRecipe(@Param('id') id: string) {
        return this.recipesService.deleteById(id);
    }

    @Put(':id')
    updateRecipe(@Param('id') id: string, @Body() updatedRecipe: UpdateRecipeDto) {
        return this.recipesService.updateById(id, updatedRecipe);
    }
}
