import { Todo } from "./todoData"
import { sideBar, displayProjects, displayTodos } from "./todoPage"
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
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
    main.remove()
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

function loadProjects(projects) {
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
        const mainC = displayTodos(projects[0].todoIds, todos)
        content.appendChild(mainC)
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


const topbar = sideBar()
content.appendChild(topbar)

loadProjects(projects)