(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class g{projects=[];container=null;constructor(){this.container=document.getElementById("projects-container")}async init(){if(this.container)try{await this.loadProjects(),this.renderProjects()}catch(e){console.error("Failed to load projects:",e),this.renderFallbackProjects()}}async loadProjects(){this.projects=this.getExampleProjects()}getExampleProjects(){return[{id:1,name:"Uber Analytics 2024",description:"Data analytics project using Uber trip data for 2024",html_url:"https://github.com/jadenesteves/Uber-Ride-Analytics-2024",homepage:null,language:"Python",languages_url:"",stargazers_count:0,forks_count:0,topics:["python","data-analytics","uber","visualization"],created_at:"2024-01-15T10:00:00Z",updated_at:"2024-12-01T15:30:00Z",languages:{Python:85,Jupyter:15},image:"/images/uber-analytics.webp",wip:!0},{id:2,name:"Expense Tracker App",description:"Android mobile application used to track your expenses",html_url:"https://github.com/jadenesteves/ExpenseTrackerApp",homepage:null,language:"Java",languages_url:"",stargazers_count:0,forks_count:0,topics:["android","java","mobile","expense-tracker"],created_at:"2024-02-20T14:00:00Z",updated_at:"2024-11-15T09:45:00Z",languages:{Java:80,XML:20},image:"/images/expense-tracker.webp"},{id:3,name:"Senior Capstone Assignment",description:"Experiment on human body doubling vs virtual human body doubling",html_url:"https://github.com/ap26131/VH-Body-Doubling-for-Productivity-",homepage:null,language:"JavaScript",languages_url:"",stargazers_count:0,forks_count:0,topics:["research","experiment","body-doubling","virtual"],created_at:"2024-03-10T12:00:00Z",updated_at:"2024-11-20T16:20:00Z",languages:{JavaScript:60,HTML:25,CSS:15},image:"/images/capstone.webp"},{id:4,name:"Project Lightfall: Top-Down Prototype",description:"Top-down horror game prototype made in Gamemaker Studio",html_url:"https://github.com/jadenesteves/Project-Lightfall-Top-Down-Prototype",homepage:null,language:"GML",languages_url:"",stargazers_count:0,forks_count:0,topics:["gamemaker","horror","game-development","prototype"],created_at:"2024-04-05T09:00:00Z",updated_at:"2024-12-01T11:10:00Z",languages:{GML:90,Other:10},image:"/images/lightfall.webp"}]}renderProjects(){this.container&&(this.container.innerHTML=this.projects.map(e=>this.createProjectCard(e)).join(""))}renderFallbackProjects(){this.container&&(this.container.innerHTML=`
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
    `)}createProjectCard(e){const t={TypeScript:"#2d2d2d",JavaScript:"#404040",Python:"#5f6368",CSS:"#6b7280",HTML:"#9aa0a6",Java:"#404040","C++":"#5f6368",Go:"#6b7280"},i=e.language||"Unknown",r=t[i]||"#6b7280";return`
      <div class="project-card fade-in ${e.wip?"project-wip":""}">
        ${e.wip?`<div class="wip-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17M11,9H13V7H11V9Z"/>
          </svg>
          WIP
        </div>`:""}
        
        ${e.image?`<div class="project-image">
          <img src="${e.image}" alt="${e.name}" loading="lazy">
        </div>`:""}
        
        <div class="project-content">
          <div class="project-header">
            <div>
              <h3 class="project-title">
                ${e.name}
                ${e.wip?'<span class="wip-indicator"> (Work in Progress)</span>':""}
              </h3>
              <p class="project-description">${e.description||"No description available"}</p>
            </div>
          </div>
          
          <div class="project-tech">
            ${e.topics.slice(0,4).map(s=>`<span class="tech-tag">${s}</span>`).join("")}
            ${e.language?`<span class="tech-tag" style="background-color: ${r}; color: white;">${e.language}</span>`:""}
          </div>
          
          <div class="project-links">
            <a href="${e.html_url}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              View Code
            </a>
          </div>
        </div>
      </div>
    `}}class p{skills;containers;constructor(){this.containers={frontend:document.getElementById("frontend-skills"),backend:document.getElementById("backend-skills"),database:document.getElementById("database-skills"),tools:document.getElementById("tools-skills")},this.skills=this.getSkillsData()}async init(){this.renderSkills()}getSkillsData(){return{frontend:[{name:"JavaScript",proficiency:"Expert",years:4},{name:"React",proficiency:"Advanced",years:3},{name:"Tailwind CSS",proficiency:"Advanced",years:2},{name:"HTML",proficiency:"Expert",years:5},{name:"CSS",proficiency:"Expert",years:5},{name:"Bootstrap",proficiency:"Advanced",years:3}],backend:[{name:"Python",proficiency:"Advanced",years:3},{name:"Node.js",proficiency:"Advanced",years:3},{name:"Next.js",proficiency:"Advanced",years:2},{name:"Express.js",proficiency:"Advanced",years:3},{name:"React Router",proficiency:"Advanced",years:2},{name:"Java",proficiency:"Intermediate",years:2}],database:[{name:"MongoDB",proficiency:"Advanced",years:3},{name:"Mongoose",proficiency:"Advanced",years:3},{name:"MySQL",proficiency:"Advanced",years:3},{name:"SQLite",proficiency:"Advanced",years:2},{name:"Oracle",proficiency:"Intermediate",years:2}],tools:[{name:"Git",proficiency:"Expert",years:4},{name:"GitHub",proficiency:"Expert",years:4},{name:"VS Code",proficiency:"Expert",years:4},{name:"Android Studio",proficiency:"Advanced",years:2},{name:"Jupyter",proficiency:"Advanced",years:3},{name:"Tableau",proficiency:"Intermediate",years:2},{name:"Google Cloud",proficiency:"Intermediate",years:1},{name:"Nodemon",proficiency:"Advanced",years:2}]}}renderSkills(){Object.entries(this.skills).forEach(([e,t])=>{const i=this.containers[e];i&&(i.innerHTML=t.map(r=>this.createSkillItem(r)).join(""))})}createSkillItem(e){const i={JavaScript:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",React:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg","Tailwind CSS":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",HTML:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",CSS:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",Bootstrap:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",Python:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg","Node.js":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg","Next.js":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg","Express.js":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg","React Router":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",Java:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",MongoDB:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",Mongoose:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",MySQL:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",SQLite:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",Oracle:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",Git:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",GitHub:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg","VS Code":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg","Android Studio":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",Jupyter:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",Tableau:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png","Google Cloud":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",Nodemon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodemon/nodemon-plain.svg"}[e.name]||"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg",r=e.years?` (${e.years}y)`:"";return`
      <div class="skill-item" title="${e.proficiency}${r}">
        <img src="${i}" alt="${e.name}" class="skill-icon" />
        <span class="skill-name">${e.name}</span>
      </div>
    `}addSkill(e,t){this.skills[e].push(t),this.renderSkills()}updateSkillProficiency(e,t,i){const r=this.skills[e].find(s=>s.name===t);r&&(r.proficiency=i,this.renderSkills())}}class h{container=null;constructor(){this.container=document.getElementById("resume-content")}async init(){this.container&&this.renderResume()}renderResume(){this.container&&(this.container.innerHTML=`
      <div class="resume-layout">
        ${this.renderResumeActions()}
        ${this.renderResumeViewer()}
      </div>
    `)}renderResumeViewer(){return`
      <div class="resume-viewer">
        <div class="resume-preview">
          <embed src="/JERESUME25.pdf" type="application/pdf" width="100%" height="800px" />
        </div>
      </div>
    `}renderResumeActions(){return`
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
    `}}class v{form=null;submitButton=null;constructor(){this.form=document.getElementById("contact-form"),this.submitButton=this.form?.querySelector('button[type="submit"]')}init(){this.form&&(this.setupFormHandlers(),this.setupFormValidation())}setupFormHandlers(){if(!this.form)return;this.form.addEventListener("submit",async t=>{t.preventDefault(),await this.handleFormSubmission()}),this.form.querySelectorAll("input, textarea").forEach(t=>{t.addEventListener("blur",()=>this.validateField(t)),t.addEventListener("input",()=>this.clearFieldError(t))})}setupFormValidation(){if(!this.form)return;const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}async handleFormSubmission(){if(!this.form||!this.submitButton)return;const e=this.getFormData();if(this.validateForm(e)){this.setSubmitButtonState(!0,"Sending...");try{await this.submitForm(e),this.showSuccessMessage(),this.resetForm()}catch(t){console.error("Form submission error:",t),this.showErrorMessage("Failed to send message. Please try again.")}finally{this.setSubmitButtonState(!1,"Send Message")}}}getFormData(){if(!this.form)throw new Error("Form not found");const e=new FormData(this.form);return{name:e.get("name")||this.form.querySelector('input[type="text"]')?.value||"",email:e.get("email")||this.form.querySelector('input[type="email"]')?.value||"",message:e.get("message")||this.form.querySelector("textarea")?.value||""}}validateForm(e){let t=!0;e.name.trim()?e.name.trim().length<2&&(this.showFieldError("name","Name must be at least 2 characters"),t=!1):(this.showFieldError("name","Name is required"),t=!1);const i=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;return e.email.trim()?i.test(e.email)||(this.showFieldError("email","Please enter a valid email address"),t=!1):(this.showFieldError("email","Email is required"),t=!1),e.message.trim()?e.message.trim().length<10&&(this.showFieldError("message","Message must be at least 10 characters"),t=!1):(this.showFieldError("message","Message is required"),t=!1),t}validateField(e){const t=e.value.trim(),i=e.type||e.tagName.toLowerCase();switch(this.clearFieldError(e),i){case"text":t?t.length<2&&this.showFieldError("name","Name must be at least 2 characters"):this.showFieldError("name","Name is required");break;case"email":t?/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(t)||this.showFieldError("email","Please enter a valid email address"):this.showFieldError("email","Email is required");break;case"textarea":t?t.length<10&&this.showFieldError("message","Message must be at least 10 characters"):this.showFieldError("message","Message is required");break}}showFieldError(e,t){const i=this.getFieldByName(e);if(!i)return;i.classList.add("form-error");const r=i.parentElement?.querySelector(".error-message");r&&r.remove();const s=document.createElement("span");s.className="error-message",s.textContent=t,i.parentElement?.appendChild(s)}clearFieldError(e){e.classList.remove("form-error");const t=e.parentElement?.querySelector(".error-message");t&&t.remove()}getFieldByName(e){if(!this.form)return null;let t=this.form.querySelector(`[name="${e}"]`);if(!t)switch(e){case"name":t=this.form.querySelector('input[type="text"]');break;case"email":t=this.form.querySelector('input[type="email"]');break;case"message":t=this.form.querySelector("textarea");break}return t}async submitForm(e){await new Promise(t=>setTimeout(t,2e3)),console.log("Form submitted:",e)}setSubmitButtonState(e,t){this.submitButton&&(this.submitButton.disabled=e,this.submitButton.textContent=t,e?this.submitButton.style.opacity="0.7":this.submitButton.style.opacity="1")}showSuccessMessage(){const e=this.form?.parentElement?.querySelector(".form-success");e&&e.remove();const t=document.createElement("div");t.className="form-success",t.innerHTML=`
      <strong>Message sent successfully!</strong><br>
      Thank you for reaching out. I'll get back to you soon.
    `,this.form?.parentElement?.insertBefore(t,this.form),setTimeout(()=>{t.remove()},5e3)}showErrorMessage(e){alert(e)}resetForm(){if(!this.form)return;this.form.reset(),this.form.querySelectorAll("input, textarea").forEach(t=>{this.clearFieldError(t)})}}class f{projectsManager;skillsManager;resumeManager;contactManager;constructor(){this.projectsManager=new g,this.skillsManager=new p,this.resumeManager=new h,this.contactManager=new v}async init(){this.setupSmoothScrolling(),await this.projectsManager.init(),await this.skillsManager.init(),await this.resumeManager.init(),this.contactManager.init(),this.setupAnimations(),console.log("Portfolio app initialized successfully!")}setupSmoothScrolling(){document.querySelectorAll('.nav-menu a[href^="#"]').forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const r=t.getAttribute("href");if(r){const s=document.querySelector(r);if(s){const a=s.offsetTop;window.scrollTo({top:a,behavior:"smooth"})}}})}),this.setupScrollSpy()}setupScrollSpy(){const e=document.querySelectorAll("section"),t=document.querySelectorAll(".nav-section"),i=()=>{const r=window.scrollY+100,s=window.innerHeight,a=document.documentElement.scrollHeight,d=window.scrollY+s>=a-10;let c="";d?c=e[e.length-1].id:e.forEach(n=>{const l=n.offsetTop,m=n.offsetHeight,u=n.id;r>=l&&r<l+m&&(c=u)}),t.forEach(n=>{n.getAttribute("data-section")===c?n.classList.add("active"):n.classList.remove("active")})};i(),window.addEventListener("scroll",i,{passive:!0})}setupAnimations(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&s.target.classList.add("fade-in")})},e);document.querySelectorAll("section").forEach(r=>{t.observe(r)})}}function y(){const o=document.getElementById("loading-spinner"),e=document.getElementById("layout-container");o&&(o.style.display="none"),e&&(e.style.opacity="1",e.classList.add("loaded"))}setTimeout(y,3e3);document.addEventListener("DOMContentLoaded",async()=>{try{await new f().init(),"fonts"in document&&await document.fonts.ready,await new Promise(i=>setTimeout(i,100));const e=document.getElementById("loading-spinner"),t=document.getElementById("layout-container");e&&t&&(e.style.display="none",t.classList.add("loaded"))}catch(o){console.error("Error initializing portfolio app:",o);const e=document.getElementById("loading-spinner"),t=document.getElementById("layout-container");e&&t&&(e.style.display="none",t.classList.add("loaded"));const i=document.querySelector("#about .hero-content");if(i){const r=document.createElement("div");r.style.cssText="background: #ff4444; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;",r.innerHTML="⚠️ Some interactive features may not be fully loaded. The site is still functional!",i.appendChild(r)}}});
