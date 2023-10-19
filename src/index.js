import { Todo } from "./todoData"
import { sideBar, displayProjects, displayTodos } from "./todoPage"
import { project } from "./projects"

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

//const mainContent = displayProjects(projects)
const mainContent = displayTodos(projects[0].todoIds, todos)
content.appendChild(mainContent)