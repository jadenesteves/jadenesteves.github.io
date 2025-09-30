import './portfolio.css'
import { ProjectsManager } from './modules/projects'
import { SkillsManager } from './modules/skills'

import { ResumeManager } from './modules/resume'
import { ContactManager } from './modules/contact'

class PortfolioApp {
  private projectsManager: ProjectsManager
  private skillsManager: SkillsManager

  private resumeManager: ResumeManager
  private contactManager: ContactManager

  constructor() {
    this.projectsManager = new ProjectsManager()
    this.skillsManager = new SkillsManager()

    this.resumeManager = new ResumeManager()
    this.contactManager = new ContactManager()


  }

  async init(): Promise<void> {
    // Initialize smooth scrolling for navigation
    this.setupSmoothScrolling()
    
    // Initialize all modules
    await this.projectsManager.init()
    await this.skillsManager.init()

    await this.resumeManager.init()
    this.contactManager.init()
    
    // Add fade-in animations
    this.setupAnimations()
    
    console.log('Portfolio app initialized successfully!')
  }

  private setupSmoothScrolling(): void {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]')
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = (link as HTMLAnchorElement).getAttribute('href')
        if (targetId) {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            const offsetTop = (targetElement as HTMLElement).offsetTop
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        }
      })
    })
    
    // Setup scroll spy for active navigation and progress
    this.setupScrollSpy()
  }

  private setupScrollSpy(): void {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav-section')

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're near the bottom of the page
      const isNearBottom = window.scrollY + windowHeight >= documentHeight - 10

      // Update active navigation item
      let activeSection = ''
      
      // If we're at the bottom, highlight the last section (contact)
      if (isNearBottom) {
        const lastSection = sections[sections.length - 1]
        activeSection = lastSection.id
      } else {
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop
          const sectionHeight = (section as HTMLElement).offsetHeight
          const sectionId = section.id

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection = sectionId
          }
        })
      }

      // Update navigation active states
      navLinks.forEach((link) => {
        const linkSection = (link as HTMLAnchorElement).getAttribute('data-section')
        if (linkSection === activeSection) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }

    // Initial call
    updateActiveSection()
    
    // Listen for scroll events
    window.addEventListener('scroll', updateActiveSection, { passive: true })
  }

  private setupAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    }, observerOptions)

    // Observe sections for fade-in animation
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      observer.observe(section)
    })
  }
}

// Function to hide loading spinner
function hideLoadingSpinner() {
  const loadingSpinner = document.getElementById('loading-spinner')
  const layoutContainer = document.getElementById('layout-container')
  
  if (loadingSpinner) {
    loadingSpinner.style.display = 'none'
  }
  if (layoutContainer) {
    layoutContainer.style.opacity = '1'
    layoutContainer.classList.add('loaded')
  }
}

// Immediate fallback - try to hide spinner after 3 seconds
setTimeout(hideLoadingSpinner, 3000)

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const app = new PortfolioApp()
    await app.init()
    
    // Wait for fonts to load to prevent font flash
    if ('fonts' in document) {
      await document.fonts.ready
    }
    
    // Small delay to ensure everything is ready
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Hide loading spinner and show content
    const loadingSpinner = document.getElementById('loading-spinner')
    const layoutContainer = document.getElementById('layout-container')
    
    if (loadingSpinner && layoutContainer) {
      loadingSpinner.style.display = 'none'
      layoutContainer.classList.add('loaded')
    }
  } catch (error) {
    console.error('Error initializing portfolio app:', error)
    
    // Hide spinner even if there's an error and show content
    const loadingSpinner = document.getElementById('loading-spinner')
    const layoutContainer = document.getElementById('layout-container')
    
    if (loadingSpinner && layoutContainer) {
      loadingSpinner.style.display = 'none'
      layoutContainer.classList.add('loaded')
    }
    
    // Show a user-friendly error message
    const heroSection = document.querySelector('#about .hero-content')
    if (heroSection) {
      const errorMessage = document.createElement('div')
      errorMessage.style.cssText = 'background: #ff4444; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;'
      errorMessage.innerHTML = '⚠️ Some interactive features may not be fully loaded. The site is still functional!'
      heroSection.appendChild(errorMessage)
    }
  }
})
