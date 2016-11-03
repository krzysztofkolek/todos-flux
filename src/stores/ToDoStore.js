import { EventEmitter } from 'events'

import dispatcher from '../dispatcher/ToDoDispatcher'

class ToDoStore extends EventEmitter {
    constructor() {
        super();

        this.todos = [
            {
                id: 1,
                task: 'Go to work',
                complete: false
            },
            {
                id: 2,
                task: 'Go home',
                complete: false
            }
        ];
    }

    createToDo(taskText) {
        this.todos.push({
            id: Date.now(),
            task: taskText,
            complete: false
        });

        this.emit('change');
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        console.log(action.type + " " + action.task);
        switch (action.type) {
            case 'CREATE_TODO':
                this.createToDo(action.task)
                break;
        }
    }
}

const todoStore = new ToDoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;