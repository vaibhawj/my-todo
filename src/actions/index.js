let nextToDoId = 0

export const addToDo = text => {
    return {
        type : 'ADD_TODO',
        text : text,
        id : nextToDoId++
    }
}

export const toggleTodo = id => {
    return {
        type : 'TOGGLE',
        id : id
    }
}