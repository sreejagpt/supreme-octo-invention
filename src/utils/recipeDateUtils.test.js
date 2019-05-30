import moment from "moment";
import { isWithinUseByDate, sortRecipesByBestBeforeDate } from './recipeDateUtils.js';

describe('recipeDateUtils Util Functions', () => {
    const yesterday = moment().subtract(1, 'day').format('YYYY-MM-DD');
    const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');
    const today = moment().format('YYYY-MM-DD');
    describe('Is Within Use By Date', () => {
        const fridgeItems =
            [{ "title": "Old Ham", "best-before": "2019-06-04", "use-by": yesterday },
            { "title": "Good Ham", "best-before": "2019-05-30", "use-by": tomorrow },
            { "title": "Barely Good Ham", "best-before": "2019-05-30", "use-by": today }]
        it('should say old ham is NOT within use by date', () => {
            expect(isWithinUseByDate('Old Ham', fridgeItems)).toEqual(false);
        });

        it('should say good ham is within use by date', () => {
            expect(isWithinUseByDate('Good Ham', fridgeItems)).toEqual(true);
        });

        it('should return false if ingredient not found in fridge', () => {
            expect(isWithinUseByDate('Green Ham', fridgeItems)).toEqual(false);
            expect(isWithinUseByDate(null, fridgeItems)).toEqual(false);
        });

        it('should return true if ingredient is usable till today', () => {
            expect(isWithinUseByDate('Barely Good Ham', fridgeItems)).toEqual(true);
        });
    });

    describe('sort recipes by best before date', () => {
        it('should return list of ingredients in recipe combined with best before date info', () => {
            const usableRecipes = [{
                "title": "Ham and Cheese Toastie",
                "ingredients": ["Ham", "Cheese"]
            }];
            const fridgeItems = [{ title: "Ham", "best-before": "12-12-2019" }, { title: "Cheese", "best-before": "12-12-2020" }];
            expect(sortRecipesByBestBeforeDate(usableRecipes, fridgeItems)).toEqual([
                {
                    title: "Ham and Cheese Toastie",
                    ingredients: fridgeItems,
                }
            ]);
        });

        it('should sort recipes past best before date to the bottom', () => {
            const usableRecipes = [{
                "title": "Recipe 1",
                "ingredients": ["Ham past best before"]
            },
            {
                "title": "Recipe 2",
                "ingredients": ["Cheese within best before"]
            }];
            const fridgeItems = [
                { title: "Ham past best before", "best-before": yesterday },
                { title: "Cheese within best before", "best-before": tomorrow }
            ];
            expect(sortRecipesByBestBeforeDate(usableRecipes, fridgeItems)).toEqual([
                {
                    "title": "Recipe 2",
                    "ingredients": [{ title: "Cheese within best before", "best-before": tomorrow }]
                },
                {
                    "title": "Recipe 1",
                    "ingredients": [{ title: "Ham past best before", "best-before": yesterday },
                    ]
                }
            ]);
        });

        it('should not attempt to sort recipes with no ingredients in the fridge', () => {
            const usableRecipes = [{
                "title": "Recipe 1",
                "ingredients": ["Ham not in fridge"]
            },
            {
                "title": "Recipe 2",
                "ingredients": ["Cheese within best before"]
            }];
            const fridgeItems = [
                { title: "Cheese within best before", "best-before": tomorrow }
            ];
            expect(sortRecipesByBestBeforeDate(usableRecipes, fridgeItems)).toEqual([
                {
                    "title": "Recipe 1",
                    "ingredients": [{ title: "Ham not in fridge" },
                    ]
                },
                {
                    "title": "Recipe 2",
                    "ingredients": [{ title: "Cheese within best before", "best-before": tomorrow }]
                },
            ]);
        });
    });
});