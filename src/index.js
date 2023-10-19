import { Todo } from "./todoData"
import { sideBar, displayProjects } from "./todoPage"
import { project } from "./projects"

const content = document.querySelector('#content')

const todos = []
const projects = []

todos.push(new Todo(0, "Workout", "Squats", "tomorrow", "high"))
projects.push(new project("Default", []))
projects[0].addTodo(0)


const topbar = sideBar()
content.appendChild(topbar)

const mainContent = displayProjects(projects)