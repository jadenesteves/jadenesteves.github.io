export interface ContactFormData {
  name: string
  email: string
  message: string
}

export class ContactManager {
  private form: HTMLFormElement | null = null
  private submitButton: HTMLButtonElement | null = null

  constructor() {
    this.form = document.getElementById('contact-form') as HTMLFormElement
    this.submitButton = this.form?.querySelector('button[type="submit"]') as HTMLButtonElement
  }

  init(): void {
    if (!this.form) return
    
    this.setupFormHandlers()
    this.setupFormValidation()
  }

  private setupFormHandlers(): void {
    if (!this.form) return

    this.form.addEventListener('submit', async (e) => {
      e.preventDefault()
      await this.handleFormSubmission()
    })

    // Real-time validation
    const inputs = this.form.querySelectorAll('input, textarea')
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input as HTMLInputElement))
      input.addEventListener('input', () => this.clearFieldError(input as HTMLInputElement))
    })
  }

  private setupFormValidation(): void {
    if (!this.form) return

    // Add custom validation styles
    const style = document.createElement('style')
    style.textContent = `
      .form-error {
        border-color: #ea4335 !important;
        box-shadow: 0 0 0 3px rgba(45, 45, 45, 0.1) !important;
      }
      
      .error-message {
        color: #ea4335;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
      }
      
      .form-success {
        background-color: #e8f5e8;
        border: 2px solid #34a853;
        border-radius: var(--border-radius);
        padding: 1rem;
        margin-bottom: 1rem;
        color: #1e4620;
      }
      
      .resume-content.highlight {
        animation: highlightPulse 2s ease-in-out;
      }
      
      @keyframes highlightPulse {
        0%, 100% { background-color: var(--secondary-bg); }
        50% { background-color: rgba(45, 45, 45, 0.1); }
      }
      
      .resume-layout {
        line-height: 1.6;
      }
      
      .resume-section {
        margin-bottom: 2rem;
      }
      
      .resume-header h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        color: var(--primary-text);
      }
      
      .resume-title {
        font-size: 1.25rem;
        color: var(--secondary-text);
        font-weight: 600;
        margin-bottom: 1rem;
      }
      
      .resume-contact {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .contact-row {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
      }
      
      .contact-row span,
      .contact-row a {
        color: var(--secondary-text);
      }
      
      .resume-section h3 {
        color: var(--primary-text);
        border-bottom: 2px solid var(--border-color);
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
      }
      
      .experience-item,
      .education-item {
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--border-color);
      }
      
      .experience-item:last-child,
      .education-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
      
      .experience-header,
      .education-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
      }
      
      .experience-header h4,
      .education-header h4 {
        margin-bottom: 0.25rem;
        color: var(--primary-text);
      }
      
      .company {
        color: var(--secondary-text);
        font-weight: 500;
      }
      
      .date-range {
        color: var(--secondary-text);
        font-weight: 500;
        white-space: nowrap;
      }
      
      .experience-description {
        margin: 1rem 0;
        padding-left: 1.5rem;
      }
      
      .experience-description li {
        margin-bottom: 0.5rem;
        color: var(--secondary-text);
      }
      
      .technologies {
        color: var(--secondary-text);
        font-size: 0.9rem;
      }
      
      .certifications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
      }
      
      .certification-item {
        padding: 1rem;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--tertiary-bg);
      }
      
      .certification-item h4 {
        margin-bottom: 0.5rem;
        color: var(--primary-text);
      }
      
      .credential-id {
        font-size: 0.875rem;
        color: var(--secondary-text);
        font-family: 'Courier New', monospace;
      }
      
      @media (max-width: 768px) {
        .experience-header,
        .education-header {
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .contact-row {
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .date-range {
          white-space: normal;
        }
      }
    `
    document.head.appendChild(style)
  }

  private async handleFormSubmission(): Promise<void> {
    if (!this.form || !this.submitButton) return

    const formData = this.getFormData()
    
    if (!this.validateForm(formData)) {
      return
    }

    // Show loading state
    this.setSubmitButtonState(true, 'Sending...')

    try {
      // Simulate form submission (replace with your actual endpoint)
      await this.submitForm(formData)
      this.showSuccessMessage()
      this.resetForm()
    } catch (error) {
      console.error('Form submission error:', error)
      this.showErrorMessage('Failed to send message. Please try again.')
    } finally {
      this.setSubmitButtonState(false, 'Send Message')
    }
  }

  private getFormData(): ContactFormData {
    if (!this.form) throw new Error('Form not found')

    const formData = new FormData(this.form)
    return {
      name: (formData.get('name') as string) || this.form.querySelector<HTMLInputElement>('input[type="text"]')?.value || '',
      email: (formData.get('email') as string) || this.form.querySelector<HTMLInputElement>('input[type="email"]')?.value || '',
      message: (formData.get('message') as string) || this.form.querySelector<HTMLTextAreaElement>('textarea')?.value || ''
    }
  }

  private validateForm(data: ContactFormData): boolean {
    let isValid = true

    // Validate name
    if (!data.name.trim()) {
      this.showFieldError('name', 'Name is required')
      isValid = false
    } else if (data.name.trim().length < 2) {
      this.showFieldError('name', 'Name must be at least 2 characters')
      isValid = false
    }

    // Validate email
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
    if (!data.email.trim()) {
      this.showFieldError('email', 'Email is required')
      isValid = false
    } else if (!emailRegex.test(data.email)) {
      this.showFieldError('email', 'Please enter a valid email address')
      isValid = false
    }

    // Validate message
    if (!data.message.trim()) {
      this.showFieldError('message', 'Message is required')
      isValid = false
    } else if (data.message.trim().length < 10) {
      this.showFieldError('message', 'Message must be at least 10 characters')
      isValid = false
    }

    return isValid
  }

  private validateField(field: HTMLInputElement): void {
    const value = field.value.trim()
    const type = field.type || field.tagName.toLowerCase()

    this.clearFieldError(field)

    switch (type) {
      case 'text':
        if (!value) {
          this.showFieldError('name', 'Name is required')
        } else if (value.length < 2) {
          this.showFieldError('name', 'Name must be at least 2 characters')
        }
        break
      
      case 'email':
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
        if (!value) {
          this.showFieldError('email', 'Email is required')
        } else if (!emailRegex.test(value)) {
          this.showFieldError('email', 'Please enter a valid email address')
        }
        break
      
      case 'textarea':
        if (!value) {
          this.showFieldError('message', 'Message is required')
        } else if (value.length < 10) {
          this.showFieldError('message', 'Message must be at least 10 characters')
        }
        break
    }
  }

  private showFieldError(fieldName: string, message: string): void {
    const field = this.getFieldByName(fieldName)
    if (!field) return

    field.classList.add('form-error')
    
    // Remove existing error message
    const existingError = field.parentElement?.querySelector('.error-message')
    if (existingError) {
      existingError.remove()
    }

    // Add new error message
    const errorElement = document.createElement('span')
    errorElement.className = 'error-message'
    errorElement.textContent = message
    field.parentElement?.appendChild(errorElement)
  }

  private clearFieldError(field: HTMLInputElement): void {
    field.classList.remove('form-error')
    const errorMessage = field.parentElement?.querySelector('.error-message')
    if (errorMessage) {
      errorMessage.remove()
    }
  }

  private getFieldByName(name: string): HTMLInputElement | HTMLTextAreaElement | null {
    if (!this.form) return null
    
    // Try by name attribute first
    let field = this.form.querySelector(`[name="${name}"]`) as HTMLInputElement | HTMLTextAreaElement
    
    // Fallback to type-based selection
    if (!field) {
      switch (name) {
        case 'name':
          field = this.form.querySelector('input[type="text"]') as HTMLInputElement
          break
        case 'email':
          field = this.form.querySelector('input[type="email"]') as HTMLInputElement
          break
        case 'message':
          field = this.form.querySelector('textarea') as HTMLTextAreaElement
          break
      }
    }
    
    return field
  }

  private async submitForm(data: ContactFormData): Promise<void> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real implementation, you would send this to your backend
    // Example with fetch:
    /*
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
    */
    
    console.log('Form submitted:', data)
  }

  private setSubmitButtonState(loading: boolean, text: string): void {
    if (!this.submitButton) return

    this.submitButton.disabled = loading
    this.submitButton.textContent = text
    
    if (loading) {
      this.submitButton.style.opacity = '0.7'
    } else {
      this.submitButton.style.opacity = '1'
    }
  }

  private showSuccessMessage(): void {
    const existingSuccess = this.form?.parentElement?.querySelector('.form-success')
    if (existingSuccess) {
      existingSuccess.remove()
    }

    const successElement = document.createElement('div')
    successElement.className = 'form-success'
    successElement.innerHTML = `
      <strong>Message sent successfully!</strong><br>
      Thank you for reaching out. I'll get back to you soon.
    `
    
    this.form?.parentElement?.insertBefore(successElement, this.form)
    
    // Auto-remove success message after 5 seconds
    setTimeout(() => {
      successElement.remove()
    }, 5000)
  }

  private showErrorMessage(message: string): void {
    // You can implement error message display similar to success message
    alert(message) // Temporary simple implementation
  }

  private resetForm(): void {
    if (!this.form) return
    
    this.form.reset()
    
    // Clear any remaining error states
    const fields = this.form.querySelectorAll('input, textarea')
    fields.forEach(field => {
      this.clearFieldError(field as HTMLInputElement)
    })
  }
}