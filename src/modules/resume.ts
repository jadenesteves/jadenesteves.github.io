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
    this.setupMobileDetection()
  }

  private isMobileDevice(): boolean {
    // Check screen size and user agent
    const isMobileWidth = window.innerWidth <= 768
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    return isMobileWidth || (isMobileUA && isTouchDevice)
  }

  private setupMobileDetection(): void {
    // Initial setup
    this.handleDeviceType()
    
    // Handle orientation changes and window resize
    window.addEventListener('resize', () => {
      this.handleDeviceType()
    })
    
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.handleDeviceType()
      }, 100)
    })
  }

  private handleDeviceType(): void {
    const desktopViewer = document.querySelector('.desktop-pdf-viewer') as HTMLElement
    const mobileFallback = document.querySelector('.mobile-pdf-fallback') as HTMLElement
    
    if (!desktopViewer || !mobileFallback) return
    
    if (this.isMobileDevice()) {
      desktopViewer.style.display = 'none'
      mobileFallback.style.display = 'flex'
    } else {
      desktopViewer.style.display = 'block'
      mobileFallback.style.display = 'none'
    }
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
        <div class="resume-preview" id="resume-preview">
          <!-- Desktop/Tablet PDF Embed -->
          <div class="desktop-pdf-viewer">
            <embed src="/JERESUME25.pdf" type="application/pdf" width="100%" height="800px" />
          </div>
          
          <!-- Mobile Fallback -->
          <div class="mobile-pdf-fallback" style="display: none;">
            <div class="pdf-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" style="margin-bottom: 1rem; color: var(--accent-color);">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <h3>Resume Preview</h3>
              <p>For the best experience on mobile, tap "View Resume" to open the PDF in a new tab.</p>
              <div class="mobile-pdf-actions">
                <a href="/JERESUME25.pdf" target="_blank" class="btn-primary mobile-view-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  private renderResumeActions(): string {
    return `
      <div class="resume-actions">
        <a href="/JERESUME25.pdf" target="_blank" class="btn-primary resume-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
          </svg>
          View Resume
        </a>
        <a href="/JERESUME25.pdf" download="Jaden_Esteves_Resume.pdf" class="btn-secondary resume-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download Resume
        </a>
      </div>
    `
  }




}