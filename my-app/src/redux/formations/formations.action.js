export const ADD_FORMATION = 'ADD_FORMATION';
export const LOAD_FORMATIONS = 'LOAD_FORMATIONS';
export const FORMATIONS_LOADED = 'FORMATIONS_LOADED';

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

export function addFormation(name){
    return {
        type: ADD_FORMATION,
        name
    }
}


export function formationsLoaded(formations){
    return {
        type: FORMATIONS_LOADED,
        list: formations
    }
}


export function loadFormations(){
    return (dispatch) => {
        dispatch({type: LOAD_FORMATIONS});
        return new Promise((resolve) => {
            setTimeout(() => resolve(listeFormation), 2000);
        }).then((formations) => dispatch(formationsLoaded(formations)));
    }
}