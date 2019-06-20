import moment from 'moment';

export const isWithinUseByDate = (ingredient, fridgeItems) => fridgeItems.some(fridgeItem => fridgeItem.title === ingredient && moment(fridgeItem['use-by']).isSameOrAfter(moment().format('YYYY-MM-DD')));

export const sortRecipesByBestBeforeDate = (usableRecipes, fridgeItems) => {
  const recipesWithIngredientDates = usableRecipes.reduce((withDates, recipe) => {
    const ingredientsWithDates = recipe.ingredients.map(
      ingredient => fridgeItems.find(fridgeItem => fridgeItem.title === ingredient)
      || { title: ingredient },
    );
    const recipeWithIngredientDates = { ...recipe, ingredients: ingredientsWithDates };
    withDates.push(recipeWithIngredientDates);
    return withDates;
  }, []);
  return recipesWithIngredientDates.sort((recipe) => {
    const ingredientsBestBeforeDates = recipe.ingredients.map(i => i['best-before']);
    const today = moment().format('YYYY-MM-DD');
    const someIngredientPastBestBefore = ingredientsBestBeforeDates.some(
      bestBeforeDate => bestBeforeDate && bestBeforeDate < today,
    );
    return someIngredientPastBestBefore ? 1 : 0;
  });
};
