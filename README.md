# Developer Portfolio

A modern, minimalistic portfolio website inspired by Hugo's PaperMod theme. Built with TypeScript, Vite, and vanilla web technologies for optimal performance and simplicity.

## ✨ Features

- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **GitHub Integration**: Showcase your repositories with live data (configurable)
- **Data Analytics**: Interactive charts showing GitHub activity and technology usage
- **Skills Showcase**: Organized display of frontend, backend, database, and tool proficiencies
- **Resume Section**: Professional resume with download functionality
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with minimal dependencies
- **Dark/Light Theme**: Automatic theme switching based on user preference
- **Smooth Animations**: Subtle animations and transitions for better UX

## 🚀 Quick Start

### Prerequisites

- Node.js (20.19+ or 22.12+)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠 Customization

### Personal Information

Edit the data in each module to customize your portfolio:

1. **Projects** (`src/modules/projects.ts`):
   - Update `getExampleProjects()` with your actual projects
   - Configure GitHub API integration for live data

2. **Skills** (`src/modules/skills.ts`):
   - Modify `getSkillsData()` to reflect your technologies
   - Adjust proficiency levels and years of experience

3. **Resume** (`src/modules/resume.ts`):
   - Update `getResumeData()` with your professional information
   - Add/remove sections as needed

4. **Contact** (`src/modules/contact.ts`):
   - Configure form submission endpoint
   - Update contact information in HTML

5. **Analytics** (`src/modules/analytics.ts`):
   - Connect to GitHub API for real data
   - Customize chart types and metrics

### Styling

- **Colors**: Modify CSS variables in `src/portfolio.css`
- **Fonts**: Change font imports in `index.html`
- **Layout**: Adjust grid systems and spacing
- **Components**: Add new sections or modify existing ones

### GitHub Integration

To display real GitHub data:

1. Get a GitHub personal access token
2. Uncomment and configure the Octokit integration in `projects.ts`
3. Update the username in API calls

```typescript
// In src/modules/projects.ts
const octokit = new Octokit({ 
  auth: 'your-github-token' 
})

const { data: repos } = await octokit.rest.repos.listForUser({
  username: 'your-github-username',
  sort: 'updated',
  per_page: 6
})
```

## 📁 Project Structure

```
├── public/
│   └── vite.svg                 # Favicon
├── src/
│   ├── modules/                 # Feature modules
│   │   ├── analytics.ts         # GitHub & project analytics
│   │   ├── contact.ts          # Contact form functionality
│   │   ├── projects.ts         # GitHub projects display
│   │   ├── resume.ts           # Resume section
│   │   └── skills.ts           # Skills categorization
│   ├── main.ts                 # Application entry point
│   ├── portfolio.css           # Main stylesheet
│   ├── style.css               # Vite default styles
│   └── typescript.svg          # TypeScript logo
├── index.html                   # Main HTML template
├── package.json                # Dependencies & scripts
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design Philosophy

This portfolio follows a minimalistic design approach inspired by Hugo's PaperMod theme:

- **Clean Typography**: Inter font family for excellent readability
- **Subtle Animations**: Smooth transitions without being distracting
- **Consistent Spacing**: Systematic use of spacing variables
- **Accessible Colors**: High contrast ratios and semantic color usage
- **Mobile-First**: Responsive design that works on all devices

## 📊 Analytics & Charts

The portfolio includes interactive data visualizations:

- **GitHub Activity**: Line chart showing contribution patterns
- **Technology Distribution**: Doughnut chart of programming languages
- **Project Metrics**: Key statistics about your repositories

Charts are built with Chart.js for performance and customizability.

## 🔧 Technologies Used

- **Frontend**: TypeScript, HTML5, CSS3
- **Build Tool**: Vite
- **Charts**: Chart.js
- **GitHub API**: Octokit
- **Icons**: Lucide (optional)
- **Styling**: CSS Custom Properties, CSS Grid, Flexbox

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

This is a static site that can be deployed to:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect to GitHub
- **GitHub Pages**: Use GitHub Actions for automated builds
- **AWS S3 + CloudFront**: For AWS-based hosting
- **Any static hosting service**

### Deployment Commands

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider submitting a pull request!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the browser console for error messages
2. Ensure all dependencies are properly installed
3. Verify that your Node.js version meets the requirements
4. Review the customization guide above

## 🔄 Updates

To keep your portfolio updated with the latest features:

1. Check for updates to dependencies
2. Review new Chart.js features for enhanced analytics
3. Update GitHub API calls as needed
4. Refresh your projects and skills data regularly

---

**Built with ❤️ using TypeScript and Vite**