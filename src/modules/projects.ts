// import { Octokit } from '@octokit/rest'

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  languages_url: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
}

export interface ProjectData extends GitHubRepo {
  languages: { [key: string]: number }
  image?: string
  wip?: boolean
}

export class ProjectsManager {
  private projects: ProjectData[] = []
  private container: HTMLElement | null = null

  constructor() {
    this.container = document.getElementById('projects-container')
    // Initialize Octokit if you have a GitHub token
    // const octokit = new Octokit({ auth: 'your-github-token' })
  }

  async init(): Promise<void> {
    if (!this.container) return
    
    try {
      await this.loadProjects()
      this.renderProjects()
    } catch (error) {
      console.error('Failed to load projects:', error)
      this.renderFallbackProjects()
    }
  }

  private async loadProjects(): Promise<void> {
    // Use curated example projects for reliability on GitHub Pages
    // GitHub API can hit rate limits (60 req/hour) on static sites
    this.projects = this.getExampleProjects()
    
    // Optional: Try to fetch real GitHub repos as enhancement
    // Uncomment this if you want to try GitHub API (with rate limit risk)
    /*
    try {
      const response = await fetch('https://api.github.com/users/jadenesteves/repos?sort=updated&per_page=10')
      if (response.ok) {
        const repos: GitHubRepo[] = await response.json()
        this.projects = repos
          .filter(repo => !repo.name.includes('.github.io') && repo.description)
          .map(repo => ({
            ...repo,
            languages: { [repo.language || 'Unknown']: 100 },
            image: this.getProjectImage(repo.name),
            wip: this.isWipProject(repo)
          }))
          .slice(0, 6)
      }
    } catch (error) {
      console.log('GitHub API unavailable, using curated projects')
    }
    */
  }



  private getExampleProjects(): ProjectData[] {
    return [
      {
        id: 1,
        name: 'FGC Event Finder',
        description: 'Ultra-fast FGC event finder with SQLite caching and Google Sheets integration',
        html_url: 'https://github.com/jadenesteves/fgc-event-finder',
        homepage: null,
        language: 'JavaScript',
        languages_url: '',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['javascript', 'HTML', 'sqlite', 'google-sheets', 'fgc'],
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-12-01T15:30:00Z',
        languages: { JavaScript: 85, other: 15},
        image: '/images/fgceventfinder.webp',
        wip: true
      },
      {
        id: 2,
        name: 'Uber Analytics 2024',
        description: 'Data analytics project using Uber trip data for 2024',
        html_url: 'https://github.com/jadenesteves/Uber-Ride-Analytics-2024',
        homepage: null,
        language: 'Python',
        languages_url: '',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['python', 'data-analytics', 'uber', 'visualization'],
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-12-01T15:30:00Z',
        languages: { Python: 85, Jupyter: 15 },
        image: '/images/uber-analytics.webp',
        wip: true
      },
      {
        id: 3,
        name: 'Expense Tracker App',
        description: 'Android mobile application used to track your expenses',
        html_url: 'https://github.com/jadenesteves/ExpenseTrackerApp',
        homepage: null,
        language: 'Java',
        languages_url: '',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['android', 'java', 'mobile', 'expense-tracker'],
        created_at: '2024-02-20T14:00:00Z',
        updated_at: '2024-11-15T09:45:00Z',
        languages: { Java: 80, XML: 20 },
        image: '/images/expense-tracker.webp'
      },
      {
        id: 4,
        name: 'Senior Capstone Assignment',
        description: 'Experiment on human body doubling vs virtual human body doubling',
        html_url: 'https://github.com/ap26131/VH-Body-Doubling-for-Productivity-',
        homepage: null,
        language: 'JavaScript',
        languages_url: '',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['research', 'experiment', 'body-doubling', 'virtual'],
        created_at: '2024-03-10T12:00:00Z',
        updated_at: '2024-11-20T16:20:00Z',
        languages: { JavaScript: 60, HTML: 25, CSS: 15 },
        image: '/images/capstone.webp'
      },
      {
        id: 5,
        name: 'Project Lightfall: Top-Down Prototype',
        description: 'Top-down horror game prototype made in Gamemaker Studio',
        html_url: 'https://github.com/jadenesteves/Project-Lightfall-Top-Down-Prototype',
        homepage: null,
        language: 'GML',
        languages_url: '',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['gamemaker', 'horror', 'game-development', 'prototype'],
        created_at: '2024-04-05T09:00:00Z',
        updated_at: '2024-12-01T11:10:00Z',
        languages: { GML: 90, Other: 10 },
        image: '/images/lightfall.webp'
      }
    ]
  }

  private renderProjects(): void {
    if (!this.container) return
    
    this.container.innerHTML = this.projects.map(project => this.createProjectCard(project)).join('')
  }

  private renderFallbackProjects(): void {
    if (!this.container) return
    
    this.container.innerHTML = `
      <div class="project-card">
        <div class="project-header">
          <div>
            <h3 class="project-title">Sample Project</h3>
            <p class="project-description">Your awesome projects will appear here. Configure your GitHub token to display real repositories.</p>
          </div>
        </div>
        <div class="project-tech">
          <span class="tech-tag">React</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-links">
          <a href="#" class="btn-secondary">View Project</a>
        </div>
      </div>
    `
  }

  private createProjectCard(project: ProjectData): string {
    const languageColors: { [key: string]: string } = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      Python: '#3776ab',
      CSS: '#1572b6',
      HTML: '#e34c26',
      Java: '#ed8b00',
      'C++': '#00599c',
      Go: '#00add8',
      GML: '#8fb010'
    }

    const primaryLanguage = project.language || 'Unknown'
    const languageColor = languageColors[primaryLanguage] || '#6b7280'

    return `
      <div class="project-card fade-in ${project.wip ? 'project-wip' : ''}">
        ${project.wip ? `<div class="wip-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17M11,9H13V7H11V9Z"/>
          </svg>
          WIP
        </div>` : ''}
        
        ${project.image ? `<div class="project-image">
          <img src="${project.image}" alt="${project.name}" loading="lazy">
        </div>` : ''}
        
        <div class="project-content">
          <div class="project-header">
            <div>
              <h3 class="project-title">
                ${project.name}
                ${project.wip ? '<span class="wip-indicator"> (Work in Progress)</span>' : ''}
              </h3>
              <p class="project-description">${project.description || 'No description available'}</p>
            </div>
          </div>
          
          <div class="project-tech">
            ${project.topics.slice(0, 4).map(topic => `<span class="tech-tag">${topic}</span>`).join('')}
            ${project.language ? `<span class="tech-tag" style="background-color: ${languageColor}; color: white;">${project.language}</span>` : ''}
          </div>
          
          <div class="project-links">
            <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              View Code
            </a>
          </div>
        </div>
      </div>
    `
  }
}