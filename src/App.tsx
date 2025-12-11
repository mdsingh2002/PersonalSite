import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import GitHubProjects from './components/GitHubProjects'
import ElectronicsProjects from './components/ElectronicsProjects'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'
import ElectronicsProjectDetails from './components/ElectronicsProjectDetails'

function HomePage() {
  return (
    <>
      <About />
      <Experience />
      <Skills />
      <GitHubProjects />
      <ElectronicsProjects />
      <Contact />
    </>
  )
}

function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  return <ProjectDetails projectId={projectId || ''} />
}

function ElectronicsDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  return <ElectronicsProjectDetails projectId={projectId || ''} />
}

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          Built with React & Tailwind CSS • Data from GitHub API
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/electronics/:projectId" element={<ElectronicsDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
