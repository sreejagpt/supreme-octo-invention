import moment from "moment";

export const isWithinUseByDate = (ingredient, fridgeItems) =>
    fridgeItems.some(fridgeItem => fridgeItem.title === ingredient && moment(fridgeItem['use-by']).isSameOrAfter(moment().format('YYYY-MM-DD')));
