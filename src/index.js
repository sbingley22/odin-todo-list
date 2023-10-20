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

function addNewListeners() {
    const form = document.querySelector('#my-form')
    const submitBtn = document.querySelector('#submit-btn')
    if (form && submitBtn){
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault()

            const title = form.elements.title.value;
            const date = form.elements.date.value;
            const priority = form.elements.priority.value;
            const description = form.elements.description.value;

            alert(title+date+priority+description)
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

function loadNew() {
    const element = document.querySelector('#main')
    removeListeners(element)
    removeMain()
    const mainC = displayNew()
    content.appendChild(mainC)
    addNewListeners()
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
        //addTodosListeners(mainC)
    }
    else {
        alert("cant match todo id")
    }
}

const content = document.querySelector('#content')

const todos = []
const projects = []

todos.push(new Todo(0, "Workout", "Squats", "tomorrow", "high"))
todos.push(new Todo(1, "Flex", "Abs", "now", "low"))
projects.push(new project("Default", []))
projects[0].addTodo(0)
projects[0].addTodo(1)
projects.push(new project("Extra", []))
projects[1].addTodo(0)
projects.push(new project("Extra", []))
projects[2].addTodo(0)
projects.push(new project("Extra", []))
projects[3].addTodo(0)


const topbar = sideBar(projects[0].name)
content.appendChild(topbar)

addSidebarListeners()
loadProjects()