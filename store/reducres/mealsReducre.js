import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';
import { TOOGLE_FAVORITE } from '../actions/mealsActions';

const initialState = {
    meals: MEALS,
    filtersMeals: MEALS,
    favoritesMeals: [],
};

const mealsReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOOGLE_FAVORITE:
            const existingIndex = state.favoritesMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoritesMeals];
                updatedFavMeals.splice(existingIndex, 1)
                return {
                    ...state,
                    favoritesMeals: updatedFavMeals
                };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {
                    ...state,
                    favoritesMeals: state.favoritesMeals.concat(meal)
                }
            }
        default:
            return state;
    }
}

export default mealsReducer;