/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
class project {
    constructor(name, todoIds) {
        this._name = name;
       
        this.todoIds = todoIds;
    }

    addTodo(id) {
        this.todoIds.push(id);
    }

    get name() {
        return this._name; // Return the value of the private variable
    }

    set name(name) {
        this._name = name; // Set the private variable with the new value
    }
}




/***/ }),

/***/ "./src/todoData.js":
/*!*************************!*\
  !*** ./src/todoData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(id, title, description, dueDate, priority){
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}



/***/ }),

/***/ "./src/todoPage.js":
/*!*************************!*\
  !*** ./src/todoPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayNew: () => (/* binding */ displayNew),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   displayTodo: () => (/* binding */ displayTodo),
/* harmony export */   displayTodos: () => (/* binding */ displayTodos),
/* harmony export */   sideBar: () => (/* binding */ sideBar)
/* harmony export */ });
const sideBar = (currentProject = "Default") => {
    const sidebar = document.createElement("div")
    sidebar.id = 'sidebar'
    
    const h1 = document.createElement('h1')
    h1.textContent = 'Todo List'

    const newTodo = document.createElement('h2')
    newTodo.textContent = "New"
    newTodo.id = 'new-button'

    const project = document.createElement('h2')
    project.textContent = currentProject
    project.id = 'project-button'

    const projects = document.createElement('h2')
    projects.textContent = 'View Projects'
    projects.id = 'projects-button'

    sidebar.appendChild(h1)
    sidebar.appendChild(newTodo)
    sidebar.appendChild(project)
    sidebar.appendChild(projects)

    return sidebar
}

const displayProjects = (projects) => {
    const projectDiv = document.createElement('div')
    projectDiv.id = 'main'
    projectDiv.className = 'projects-container'

    for (let i = 0; i < projects.length; i++) {
        const name = projects[i].name;
        const ids = projects[i].todoIds;
        const div = document.createElement("div")
        div.className = 'projects-card'
        const title = document.createElement("h1")
        title.textContent = name
        const p = document.createElement("p")
        p.textContent = `Number of todos: ${ids.length}`

        div.appendChild(title)
        div.appendChild(p)
        projectDiv.appendChild(div)
    }

    return projectDiv
}

const displayTodos = (todoIds, todos) => {
    const todoDiv = document.createElement('div')
    todoDiv.id = 'main'
    todoDiv.className = 'todos-container'

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        
        if (todo.id in todoIds) {
            const div = document.createElement("div")
            div.className = 'todo-card'
            div.setAttribute("data-id", todo.id)
            const title = document.createElement("h1")
            title.textContent = todo.title
            const date = document.createElement("h5")
            date.textContent = "Date due: " + todo.dueDate
            
            if (todo.priority == "high") div.style.borderColor = "red"
            else if (todo.priority == "mid") div.style.borderColor = "yellow"
            else div.style.borderColor = "green"
    
            div.appendChild(title)
            div.appendChild(date)
            todoDiv.appendChild(div)
        }
    }

    return todoDiv
}

const displayTodo = (todo) => {
    const todoDiv = document.createElement('div')
    todoDiv.id = 'main'
    todoDiv.className = 'todo-singular'
        
    const div = document.createElement("div")
    div.className = 'todo-card'
    const title = document.createElement("h1")
    title.textContent = todo.title
    const date = document.createElement("h5")
    date.textContent = "Date due: " + todo.date
    const priority = document.createElement("h6")
    priority.textContent = "Priority: " + todo.priority
    const p = document.createElement("p")
    p.textContent = todo.description

    if (todo.priority == "high") div.style.borderColor = "red"
    else if (todo.priority == "mid") div.style.borderColor = "yellow"
    else div.style.borderColor = "green"

    div.appendChild(title)
    div.appendChild(date)
    div.appendChild(priority)
    div.appendChild(p)
    todoDiv.appendChild(div)

    return todoDiv
}

const displayNew = () => {
    const todoDiv = document.createElement('div')
    todoDiv.id = 'main'
    todoDiv.className = 'new-form'
        
    const div = document.createElement("div")
    div.className = 'form-card'

    const form = document.createElement("form");
    form.id = "my-form";

    const nameLabel = document.createElement("label");
    nameLabel.innerText = "Title:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "title";

    form.appendChild(nameLabel)
    form.appendChild(nameInput)

    const dateLabel = document.createElement("label")
    dateLabel.innerText = "Due date:"
    const dateInput = document.createElement("input")
    dateInput.type = "date"
    dateInput.name = "date"
    form.appendChild(dateLabel)
    form.appendChild(dateInput)

    const priorityLabel = document.createElement("label")
    priorityLabel.innerText = "Priority:"
    form.appendChild(priorityLabel)

    const divR = document.createElement("div")
    form.appendChild(divR)
    divR.style.marginTop = 0
    divR.style.paddingTop = 0

    const options = ["low", "mid", "high"]
    options.forEach((option,index) => {
        // Create a radio button element
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "priority"; // Use the same name for all radio buttons to create a group
        radioButton.value = option;
        radioButton.style.marginLeft = 0
        radioButton.style.marginTop = 0
        //radioButton.style.paddingLeft = 0
    
        // Create a label element for the radio button
        const label = document.createElement("label");
        label.textContent = option;
        label.style.marginRight = 0
        label.style.marginTop = 0
        //label.style.paddingRight = 0

        // Append the radio button and label to the container
        divR.appendChild(label);
        divR.appendChild(radioButton);
    })

    const textLabel = document.createElement("label");
    textLabel.innerText = "Description:";
    const textarea = document.createElement("textarea");
    textarea.name = "description";
    textarea.rows = 4; // Set the number of rows (optional)
    textarea.cols = 50;
    form.appendChild(textLabel)
    form.appendChild(textarea)

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Add Todo";
    submitButton.id = "submit-btn"

    form.appendChild(submitButton)
    div.appendChild(form)
    todoDiv.appendChild(div)

    return todoDiv
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoData */ "./src/todoData.js");
/* harmony import */ var _todoPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoPage */ "./src/todoPage.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




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
    const mainC = (0,_todoPage__WEBPACK_IMPORTED_MODULE_1__.displayNew)()
    content.appendChild(mainC)
    addNewListeners()
}

function loadProjects() {
    const element = document.querySelector('#main')
    removeListeners(element)
    removeMain()
    const mainC = (0,_todoPage__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(projects)
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
        const mainC = (0,_todoPage__WEBPACK_IMPORTED_MODULE_1__.displayTodos)(project.todoIds, todos)
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
        const mainC = (0,_todoPage__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(todo)
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

todos.push(new _todoData__WEBPACK_IMPORTED_MODULE_0__.Todo(0, "Workout", "Squats", "tomorrow", "high"))
todos.push(new _todoData__WEBPACK_IMPORTED_MODULE_0__.Todo(1, "Flex", "Abs", "now", "low"))
projects.push(new _projects__WEBPACK_IMPORTED_MODULE_2__.project("Default", []))
projects[0].addTodo(0)
projects[0].addTodo(1)
projects.push(new _projects__WEBPACK_IMPORTED_MODULE_2__.project("Extra", []))
projects[1].addTodo(0)
projects.push(new _projects__WEBPACK_IMPORTED_MODULE_2__.project("Extra", []))
projects[2].addTodo(0)
projects.push(new _projects__WEBPACK_IMPORTED_MODULE_2__.project("Extra", []))
projects[3].addTodo(0)


const topbar = (0,_todoPage__WEBPACK_IMPORTED_MODULE_1__.sideBar)(projects[0].name)
content.appendChild(topbar)

addSidebarListeners()
loadProjects()
})();

/******/ })()
;
//# sourceMappingURL=main.js.map