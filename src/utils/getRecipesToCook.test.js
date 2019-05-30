import moment from "moment";
import { isWithinUseByDate, isPastBestButWithinUseBy } from './getRecipesToCook.js';

describe('getRecipesToCook Util Functions', () => {
    describe('Is Within Use By Date', () => {
        const yesterday = moment().subtract(1, 'day');
        const tomorrow = moment().add(1, 'day');
        const fridgeItems =
            [{ "title": "Old Ham", "best-before": "2019-06-04", "use-by": yesterday.format('YYYY-MM-DD') },
            { "title": "Good Ham", "best-before": "2019-05-30", "use-by": tomorrow.format('YYYY-MM-DD') },
            { "title": "Barely Good Ham", "best-before": "2019-05-30", "use-by": moment().format('YYYY-MM-DD') }]
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
});