import {
    RESTAURANTS_LOADING,
    FETCH_RESTAURANTS_SUCCESS,
    REVIEWS_LOADING,
    FETCH_REVIEWS_SUCCESS,
    RESTAURANT_DETAILS_LOADING,
    FETCH_RESTAURANT_DETAILS_SUCCESS,
    FETCH_CATEGORIES_SUCCESS,
    OPEN_NOW_CHANGED,
    SELECTED_PRICE_CHANGED,
    SELECTED_CATEGORY_CHANGED
} from '../actions';

const initialState = {
    restaurantsLoading: false,
    reviewsLoading: false,
    categories: [],
    restaurants: [],
    restaurantDetails: {},
    reviews: [],
    openNow: true,
    queryOffset: 0,
    selectedPrice: 'all',
    selectedCategory: 'all'
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_NOW_CHANGED:
            return { ...state, openNow: action.value };
        case RESTAURANTS_LOADING:
            return { ...state, restaurantsLoading: true };
        case FETCH_RESTAURANTS_SUCCESS:
            return { ...state, restaurantsLoading: false, restaurants: action.value };
        case REVIEWS_LOADING:
            return { ...state, reviewsLoading: true };
        case FETCH_REVIEWS_SUCCESS:
            return { ...state, reviewsLoading: false, reviews: action.value };
        case RESTAURANT_DETAILS_LOADING:
            return { ...state, restaurantDetailsLoading: true };
        case FETCH_RESTAURANT_DETAILS_SUCCESS:
            return { ...state, restaurantDetailsLoading: false, restaurantDetails: action.value };
        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: action.value };
        case SELECTED_PRICE_CHANGED:
            return { ...state, selectedPrice: action.value };
        case SELECTED_CATEGORY_CHANGED:
            return { ...state, selectedCategory: action.value };
        default:
            return state;
    }
}

export default appReducer;
