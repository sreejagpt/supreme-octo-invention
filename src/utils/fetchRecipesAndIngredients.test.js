jest.mock('./getRecipesToCook', () => ({
  isWithinUseByDate: () => true,
}));

// eslint-disable-next-line import/first
import fetchRecipesAndIngredients, { INGREDIENT_URL, RECIPE_URL } from "./fetchRecipesAndIngredients";

describe('fetchRecipesAndIngredients', () => {
  it('should fetch recipes and ingredients from expected api endpoints', async () => {
    const someRecipe = { ingredients: [ 'some-ingredient' ]};
    const mockIngredientsAndRecipes = { recipes: [someRecipe], ingredients: ['some-ingredient'] };
    const mockData = Promise.resolve(mockIngredientsAndRecipes);
    const mockFetchFn = jest.fn(() => Promise.resolve({
      json: () => mockData,
    }));

    const { recipesToCook } = await fetchRecipesAndIngredients(mockFetchFn);
    expect(mockFetchFn).toHaveBeenCalledTimes(2);
    expect(mockFetchFn).toHaveBeenCalledWith(RECIPE_URL);
    expect(mockFetchFn).toHaveBeenCalledWith(INGREDIENT_URL);
    expect(recipesToCook).toEqual(mockIngredientsAndRecipes.recipes);
  });
});

afterAll(() => {
  jest.resetAllMocks();
});