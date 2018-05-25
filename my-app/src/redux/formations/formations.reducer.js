import {ADD_FORMATION, LOAD_FORMATIONS, FORMATIONS_LOADED} from './formations.action';

export const initialState = {
    list: [],
    loading: false,
    loaded: false
};

export function FormationsReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_FORMATION: 
            const formation = {
                id: state.list.length + 1,
                name: action.name,
            }
            return {
                ...state,
                list: [...state.list, formation],
            }
        case LOAD_FORMATIONS: 
            return {
                ...state,
                loading: true,
                loaded : false
            }
        case FORMATIONS_LOADED: 
            return {
                ...state,
                list : action.list,
                loading: false,
                loaded : true,
            }
        default: 
            return state;
    }
};
