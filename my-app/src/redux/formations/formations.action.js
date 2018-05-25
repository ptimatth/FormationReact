export const ADD_FORMATION = 'ADD_FORMATION';

export function addFormation(name){
    return {
        type: ADD_FORMATION,
        name
    }
}