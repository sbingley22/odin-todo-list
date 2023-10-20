import { Todo } from "./todoData"
import { sideBar, displayProjects, displayTodos, displayTodo, displayNew } from "./todoPage"
import { project } from "./projects"

function removeListeners(element) {
    if (!element) return
    // Remove listeners from the current element
    element.replaceWith(element.cloneNode(true));
    // Traverse the child nodes and remove listeners from them
    element.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {
            removeListeners(child);
        }
    })
}

function removeMain(){
    const main = document.querySelector('#main')
    if (!main) return
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
    main.remove()
}

function removeTodo(id) {
    const index = todos.findIndex(obj => obj.id == id)

    if (index !== -1) {
        todos.splice(index, 1)
    }

    for (let i = 0; i < projects.length; i++) {
        projects[i].removeTodo(id)
    }

    saveData()
}

function addNewListeners(id = null) {
    const form = document.querySelector('#my-form')
    const submitBtn = document.querySelector('#submit-btn')
    if (form && submitBtn){
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault()

            if (id != null) removeTodo(id)
            const projectBtn = document.querySelector('#project-button')

            const project = form.elements.project.value;
            const title = form.elements.title.value;
            const date = form.elements.date.value;
            const priority = form.elements.priority.value;
            const description = form.elements.description.value;

            todos.push(new Todo(project+title, title, description, date, priority))
            projectAddTodo(project, project+title)
            loadTodos(projectBtn.textContent)

            saveData()
        })
    }
}

function addSidebarListeners() {
    const newBtn = document.querySelector('#new-button')
    const projectBtn = document.querySelector('#project-button')
    const projectsBtn = document.querySelector('#projects-button')

    newBtn.addEventListener("click", (e) => {
        loadNew()
    })
    projectsBtn.addEventListener("click", (e) => {
        loadProjects()
    })
    projectBtn.addEventListener("click", (e) => {
        loadTodos(projectBtn.textContent)
    })
}

function addProjectListeners(element) {
    const children = element.children
    for (let i = 0; i < children.length; i++) {
        const project = children[i]
        project.addEventListener("click", (e) => {
            loadTodos(project.querySelector('h1').textContent)
        })
    }
}

function addTodosListeners(element) {
    const children = element.children
    for (let i = 0; i < children.length; i++) {
        const todo = children[i]
        todo.addEventListener("click", (e) => {
            loadTodo(todo.getAttribute('data-id'))
        })
    }
}

function addTodoListeners(element) {    
    element.firstChild.addEventListener("click", (e) => {
        loadNew(element.getAttribute('data-id'))
    })
    element.lastChild.addEventListener("click", (e) => {
        const id = element.getAttribute('data-id')
        removeTodo(id)
        const projectBtn = document.querySelector('#project-button')
        loadTodos(projectBtn.textContent)

        saveData()
    })
}

function loadNew(id = null) {
    const element = document.querySelector('#main')
    removeListeners(element)
    removeMain()
    const prj = document.querySelector('#project-button').textContent
    const todo = todos.find(t => t.id == id)
    const mainC = displayNew(todo, prj)
    content.appendChild(mainC)
    addNewListeners(id)
}

function loadProjects() {
    const element = document.querySelector('#main')
    removeListeners(element)
    removeMain()
    const mainC = displayProjects(projects)
    content.appendChild(mainC)
    addProjectListeners(mainC)
}

function loadTodos(title) {
    const project = projects.find(p => p.name == title)
    if (project)
    {
        const element = document.querySelector('#main')
        removeListeners(element)
        removeMain()
        const mainC = displayTodos(project.todoIds, todos)
        content.appendChild(mainC)
        addTodosListeners(mainC)

        //update sidebar
        const projectBtn = document.querySelector('#project-button')
        projectBtn.textContent = title
    }
    else {
        alert("cant find projects")
    }
}

function loadTodo(id) {
    const todo = todos.find(t => t.id == id)
    if (todo){
        const element = document.querySelector('#main')
        removeListeners(element)
        removeMain()
        const mainC = displayTodo(todo)
        content.appendChild(mainC)
        addTodoListeners(mainC)
    }
    else {
        alert("cant match todo id")
    }
}

function projectAddTodo(name, todoId){
    const index = projects.findIndex(p => p.name == name)
    if (index !== -1) {
        projects[index].addTodo(todoId)
    }
    else {
        projects.push(new project(name, [todoId]))
    }
}

function loadData(){
    let projects = []
    let todos = []

    let parsedProjects = JSON.parse(localStorage.getItem("projectData"))
    let parsedTodos = JSON.parse(localStorage.getItem("todoData"))

    if (parsedProjects == null){
        //Add defaults
        todos = []
        projects = []
        todos.push(new Todo("DefaultAdd New Todo", "Add New Todo", "Edit this todo or add a new todo using the new button in the header", "tomorrow", "low"))
        projects.push(new project("Default", ["DefaultAdd New Todo"]))
    }
    else {
        projects = parsedProjects.map(obj => {
            return new project(obj.name, obj.todoIds)
        })
        todos = parsedTodos.map(obj => { 
            return new Todo(obj.id, obj.title, obj.description, obj.dueDate, obj.priority)
        })
    }

    return {projects, todos}
}

function saveData() {
    const serializedTodo = todos.map(obj => {
        return {
            id: obj.id,
            title: obj.title,
            description: obj.description,
            dueDate: obj.dueDate,
            priority: obj.priority
        }
    })
    const serializedProject = projects.map(obj => {
        return {
            name: obj.name,
            todoIds: obj.todoIds,
        }
    })
    const todoString = JSON.stringify(serializedTodo)
    const projectString = JSON.stringify(serializedProject)

    localStorage.setItem("projectData", projectString)
    localStorage.setItem("todoData", todoString)
}

const content = document.querySelector('#content')

//localStorage.clear()
const { todos, projects } = loadData()

const topbar = sideBar(projects[0].name)
content.appendChild(topbar)

addSidebarListeners()
loadProjects()