
const todoReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO' : return [...state, {
            id : action.id,
            text : action.text,
            completed : false
            }];
        case 'TOGGLE' :
           let newState = state.map(todo => (
                (todo.id === action.id) 
            ? {...todo, completed: !todo.completed} : todo
            ));
            return newState;

        default : return state;
    }
    
}

export default todoReducer;