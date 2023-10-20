class project {
    constructor(name, todoIds) {
        this._name = name;
       
        this.todoIds = todoIds;
    }

    addTodo(id) {
        this.todoIds.push(id);
    }

    removeTodo(id) {
        const index = this.todoIds.findIndex(obj => obj == id)
    
        if (index !== -1) {
            this.todoIds.splice(index, 1)
        }

    }

    get name() {
        return this._name; // Return the value of the private variable
    }

    set name(name) {
        this._name = name; // Set the private variable with the new value
    }
}

export { project };
