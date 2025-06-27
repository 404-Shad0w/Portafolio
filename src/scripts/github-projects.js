const githubUsername = '404-Shad0w';
const projectsContainer = document.getElementById('projects');

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`);
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        projectsContainer.innerHTML = '<p class="error">Failed to load projects. Please try again later.</p>';
    }
}

function displayProjects(projects) {
    if (!projects.length) {
        projectsContainer.innerHTML = '<p class="error">No projects found.</p>';
        return;
    }

    projectsContainer.innerHTML = '';

        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
    
            card.innerHTML = `
                <div class="project-header">
                    <h3>
                        <a href="${project.html_url}" target="_blank" rel="noopener">
                            ${project.name}
                        </a>
                    </h3>
                    <span class="project-lang">${project.language || ''}</span>
                </div>
                <p class="project-desc">${project.description || 'No description available.'}</p>
                <div class="project-actions">
                    <a class="btn-download" href="${project.html_url}/archive/refs/heads/${project.default_branch}.zip" target="_blank" title="Descargar">
                        Descargar
                    </a>
                    <a class="btn-github" href="${project.html_url}" target="_blank" title="Ver en GitHub">
                        Ver en GitHub
                    </a>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    //
}

document.addEventListener('DOMContentLoaded', fetchGitHubProjects);