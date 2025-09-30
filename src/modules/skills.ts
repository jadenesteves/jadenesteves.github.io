export interface Skill {
  name: string
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  years?: number
}

export interface SkillCategory {
  frontend: Skill[]
  backend: Skill[]
  database: Skill[]
  tools: Skill[]
}

export class SkillsManager {
  private skills: SkillCategory
  private containers: {
    frontend: HTMLElement | null
    backend: HTMLElement | null
    database: HTMLElement | null
    tools: HTMLElement | null
  }

  constructor() {
    this.containers = {
      frontend: document.getElementById('frontend-skills'),
      backend: document.getElementById('backend-skills'),
      database: document.getElementById('database-skills'),
      tools: document.getElementById('tools-skills')
    }

    this.skills = this.getSkillsData()
  }

  async init(): Promise<void> {
    this.renderSkills()
  }

  private getSkillsData(): SkillCategory {
    return {
      frontend: [
        { name: 'JavaScript', proficiency: 'Expert', years: 4 },
        { name: 'React', proficiency: 'Advanced', years: 3 },
        { name: 'Tailwind CSS', proficiency: 'Advanced', years: 2 },
        { name: 'HTML', proficiency: 'Expert', years: 5 },
        { name: 'CSS', proficiency: 'Expert', years: 5 },
        { name: 'Bootstrap', proficiency: 'Advanced', years: 3 }
      ],
      backend: [
        { name: 'Python', proficiency: 'Advanced', years: 3 },
        { name: 'Node.js', proficiency: 'Advanced', years: 3 },
        { name: 'Next.js', proficiency: 'Advanced', years: 2 },
        { name: 'Express.js', proficiency: 'Advanced', years: 3 },
        { name: 'React Router', proficiency: 'Advanced', years: 2 },
        { name: 'Java', proficiency: 'Intermediate', years: 2 }
      ],
      database: [
        { name: 'MongoDB', proficiency: 'Advanced', years: 3 },
        { name: 'Mongoose', proficiency: 'Advanced', years: 3 },
        { name: 'MySQL', proficiency: 'Advanced', years: 3 },
        { name: 'SQLite', proficiency: 'Advanced', years: 2 },
        { name: 'Oracle', proficiency: 'Intermediate', years: 2 }
      ],
      tools: [
        { name: 'Git', proficiency: 'Expert', years: 4 },
        { name: 'GitHub', proficiency: 'Expert', years: 4 },
        { name: 'VS Code', proficiency: 'Expert', years: 4 },
        { name: 'Android Studio', proficiency: 'Advanced', years: 2 },
        { name: 'Jupyter', proficiency: 'Advanced', years: 3 },
        { name: 'Tableau', proficiency: 'Intermediate', years: 2 },
        { name: 'Google Cloud', proficiency: 'Intermediate', years: 1 },
        { name: 'Nodemon', proficiency: 'Advanced', years: 2 }
      ]
    }
  }

  private renderSkills(): void {
    Object.entries(this.skills).forEach(([category, skills]) => {
      const container = this.containers[category as keyof typeof this.containers]
      if (container) {
        container.innerHTML = skills.map((skill: Skill) => this.createSkillItem(skill)).join('')
      }
    })
  }

  private createSkillItem(skill: Skill): string {
    const skillIcons: { [key: string]: string } = {
      // Frontend
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      
      // Backend
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'React Router': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      
      // Database
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'Mongoose': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      
      // Tools
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'Android Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
      'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      'Tableau': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png',
      'Google Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      'Nodemon': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodemon/nodemon-plain.svg'
    }

    const icon = skillIcons[skill.name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
    const yearsText = skill.years ? ` (${skill.years}y)` : ''

    return `
      <div class="skill-item" title="${skill.proficiency}${yearsText}">
        <img src="${icon}" alt="${skill.name}" class="skill-icon" />
        <span class="skill-name">${skill.name}</span>
      </div>
    `
  }

  // Method to add new skills dynamically
  addSkill(category: keyof SkillCategory, skill: Skill): void {
    this.skills[category].push(skill)
    this.renderSkills()
  }

  // Method to update skill proficiency
  updateSkillProficiency(category: keyof SkillCategory, skillName: string, newProficiency: Skill['proficiency']): void {
    const skill = this.skills[category].find(s => s.name === skillName)
    if (skill) {
      skill.proficiency = newProficiency
      this.renderSkills()
    }
  }
}