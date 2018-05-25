import {ADD_FORMATION} from './formations.action'
export const listeFormation = [
    {
      id:1, 
      name:"React.js"
    },
    {
      id:2, 
      name:"React Native"
    },
    {
      id:3, 
      name:"Angular"
    },
    {
      id:4, 
      name:"TypeScript"
    }
];

export const initialState = {
    list: listeFormation
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
        default: 
            return state;
    }
};
