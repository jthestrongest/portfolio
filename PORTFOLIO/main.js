const projects = [
  {
    title: "Project One",
    description: "Task Management System",
    link: "#",
    category: "web"
  },
  {
    title: "Project Two",
    description: "Dashboard with charts and data fetching.",
    link: "#",
    category: "web"
  },
  {
    title: "Project Three",
    description: "Component library with theming and accessibility.",
    link: "#",
    category: "tools"
  }
];

const experience = [
  
  {
    role: "Web Developer",
    description: "Built responsive websites for diverse clients using HTML, CSS, and JavaScript. Collaborated with designers to implement pixel-perfect UIs."
  },
  
];

const education = [
  {
    school: "Jose Rizal Memorial State University",
    description: "Currently studying in Jose Rizal Memorial State University"
  },
  
];

const awards = [
  {
    title: "",
    organization: "Global Tech Challenge",
    description: "First place for building an innovative accessibility tool."
  },
  {
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    description: "Validation of technical expertise in developing and maintaining applications on AWS."
  }
];

function renderExperience() {
  const container = document.querySelector('.experience-list');
  if (!container) return;

  container.innerHTML = '';

  experience.forEach(job => {
    const item = document.createElement('div');
    item.className = 'experience-item';
    
    item.innerHTML = `
      <div class="exp-header">
        <h3 class="exp-role">${job.role}</h3>

      </div>

      <p class="exp-desc">${job.description}</p>
    `;

    container.appendChild(item);
  });
}

function renderEducation() {
  const container = document.querySelector('.education-list');
  if (!container) return;

  container.innerHTML = '';

  education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'experience-item'; // Reusing experience styling
    
    item.innerHTML = `
      <div class="exp-header">
            <h3 class="exp-role">${edu.school}</h3>
      </div>
      <p class="exp-desc">${edu.description}</p>
    `;

    container.appendChild(item);
  });
}

function renderAwards() {
  const container = document.querySelector('.awards-list');
  if (!container) return;

  container.innerHTML = '';

  awards.forEach(award => {
    const item = document.createElement('div');
    item.className = 'experience-item'; // Reusing experience styling
    
    item.innerHTML = `
      <div class="exp-header">
        <h3 class="exp-role">${award.title}</h3>
      </div>
      <p class="exp-company">${award.organization}</p>
      <p class="exp-desc">${award.description}</p>
    `;

    container.appendChild(item);
  });
}

function renderProjects(filter = 'all') {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  filteredProjects.forEach(project => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = project.link;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    // Add fade-in animation
    card.style.animation = 'fadeIn 0.5s ease-out';

    card.innerHTML = `
      <div class="card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
      <div class="card-footer">View</div>
    `;

    grid.appendChild(card);
  });
}

function setupFilters() {
  const filtersContainer = document.querySelector('.filters');
  if (!filtersContainer) return;

  const categories = ['all', 'web', 'tools'];
  
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${cat === 'all' ? 'active' : ''}`;
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.onclick = () => {
      // Update active state
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Render
      renderProjects(cat);
    };
    filtersContainer.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupFilters();
  renderProjects();
  renderExperience();
  renderEducation();
  renderAwards();
  
  // Set copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
