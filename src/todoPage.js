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
        
        if (todoIds.includes(todo.id)) {
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

    const projectLabel = document.createElement("label");
    projectLabel.innerText = "Project:";
    const projectInput = document.createElement("input");
    projectInput.type = "text";
    projectInput.name = "project";

    form.appendChild(projectLabel)
    form.appendChild(projectInput)

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
    //divR.style.marginTop = 0
    //divR.style.paddingTop = 0

    const options = ["low", "mid", "high"]
    options.forEach((option,index) => {
        // Create a radio button element
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "priority"; // Use the same name for all radio buttons to create a group
        radioButton.value = option;
        radioButton.style.marginLeft = 0
        //radioButton.style.marginTop = 0
        //radioButton.style.paddingLeft = 0
    
        // Create a label element for the radio button
        const label = document.createElement("label");
        label.textContent = option;
        label.style.marginRight = 0
        //label.style.marginTop = 0
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

export { sideBar, displayProjects, displayTodos, displayTodo, displayNew }