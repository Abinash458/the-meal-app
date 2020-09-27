export const TOOGLE_FAVORITE = 'TOOGLE_FAVORITE';

export const toggleFavorite = (id) => {
    return {
        type: TOOGLE_FAVORITE,
        mealId: id
    }
}