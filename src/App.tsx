import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import GitHubProjects from './components/GitHubProjects'
import ElectronicsProjects from './components/ElectronicsProjects'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navigation />
      <About />
      <Experience />
      <GitHubProjects />
      <ElectronicsProjects />

      {/* Footer */}
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
    </div>
  )
}

export default App
