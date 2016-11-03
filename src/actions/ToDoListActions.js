import dispatcher from '../dispatcher/ToDoDispatcher'

export function addToDo(task) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        task
    })
} 