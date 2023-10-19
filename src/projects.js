class project {
    constructor(name, todoIds){
        this.name = name
        this.todoIds = todoIds
    }

    addTodo(id) {
        this.todoIds.push(id)
    }

    get name(){
        return this.name
    }

    set name(name){
        this.name = name
    }

    get todoIds(){
        return this.todoIds
    }

    set todoIds(todoIds){
        this.todoIds
    }
}

export {project}