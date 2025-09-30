export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone?: string
    location: string
    website?: string
    linkedin?: string
    github?: string
  }
  summary: string
  experience: WorkExperience[]
  education: Education[]
  certifications?: Certification[]
}

export interface WorkExperience {
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  graduationDate: string
  gpa?: string
  honors?: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  expirationDate?: string
  credentialId?: string
}

export class ResumeManager {
  private container: HTMLElement | null = null

  constructor() {
    this.container = document.getElementById('resume-content')
  }

  async init(): Promise<void> {
    if (!this.container) return
    this.renderResume()
  }



  private renderResume(): void {
    if (!this.container) return

    this.container.innerHTML = `
      <div class="resume-layout">
        ${this.renderResumeActions()}
        ${this.renderResumeViewer()}
      </div>
    `
  }

  private renderResumeViewer(): string {
    return `
      <div class="resume-viewer">
        <div class="resume-preview">
          <embed src="./JERESUME25.pdf" type="application/pdf" width="100%" height="800px" />
        </div>
      </div>
    `
  }

  private renderResumeActions(): string {
    return `
      <div class="resume-actions">
        <a href="./JERESUME25.pdf" target="_blank" class="btn-primary resume-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
          </svg>
          View Resume
        </a>
        <a href="./JERESUME25.pdf" download="Jaden_Esteves_Resume.pdf" class="btn-secondary resume-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download Resume
        </a>
      </div>
    `
  }




}