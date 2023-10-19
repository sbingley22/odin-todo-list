const sideBar = () => {
    const sidebar = document.createElement("div")
    sidebar.id = 'sidebar'
    
    const h1 = document.createElement('h1')
    h1.textContent = 'Todo List'

    const projects = document.createElement('h2')
    projects.textContent = 'View Projects'
    projects.id = 'projects'

    sidebar.appendChild(h1)
    sidebar.appendChild(projects)

    return sidebar
}

const displayProjects = (projects) => {
    const projectDiv = document.createElement('div')
    projectDiv.id = 'main'

    for (let i = 0; i < projects.length; i++) {
        const name = projects[i].name;
        const div = document.createElement("div")
        div.className = 'projects-container'
        const title = document.createElement("h1")
        title.textContent = name
        const p = document.createElement("p")
        p.textContent = `Number of todos: ${projects.length}`

        div.appendChild(title)
        div.appendChild(p)
        projectDiv.appendChild(div)
    }

    return projectDiv
}

export { sideBar, displayProjects }