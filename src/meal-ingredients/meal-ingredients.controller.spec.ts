import { Test, TestingModule } from '@nestjs/testing';
import { MealIngredientsController } from './meal-ingredients.controller';

describe('MealIngredientsController', () => {
  let controller: MealIngredientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealIngredientsController],
    }).compile();

    controller = module.get<MealIngredientsController>(MealIngredientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
