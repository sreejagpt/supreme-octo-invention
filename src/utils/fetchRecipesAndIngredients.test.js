import fetchRecipesAndIngredients, { INGREDIENT_URL, RECIPE_URL } from "./fetchRecipesAndIngredients";

describe('fetchRecipesAndIngredients', () => {
    it('should fetch recipes and ingredients from expected api endpoints', async () => {
        const mockIngredientsAndRecipes = { recipes: ['some-recipe'], ingredients: ['some-ingredient']};
        const mockData = Promise.resolve(mockIngredientsAndRecipes);
        const mockFetchFn = jest.fn(() => Promise.resolve({
          json: () => mockData,
        }));

        const { recipes, ingredients } = await fetchRecipesAndIngredients(mockFetchFn);
        expect(mockFetchFn).toHaveBeenCalledTimes(2);
        expect(mockFetchFn).toHaveBeenCalledWith(RECIPE_URL);
        expect(mockFetchFn).toHaveBeenCalledWith(INGREDIENT_URL);
        expect(recipes).toEqual(mockIngredientsAndRecipes.recipes);
        expect(ingredients).toEqual(mockIngredientsAndRecipes.ingredients);
    });
});