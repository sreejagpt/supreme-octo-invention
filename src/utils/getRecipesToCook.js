const getRecipesToCook = async (fetchFn = fetch) => {
    const RECIPE_URL = 'http://www.mocky.io/v2/5c85f7a1340000e50f89bd6c';
    const INGREDIENT_URL = 'https://www.mocky.io/v2/5ce2082132000065562f63ca';
    const recipeData = await fetchFn(RECIPE_URL);
    const { recipes } = await recipeData.json();

    const ingredientData = await fetchFn(INGREDIENT_URL);
    const { ingredients } = await ingredientData.json();

    return recipes; //filter here
};

export default getRecipesToCook;