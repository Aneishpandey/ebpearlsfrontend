import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import LoadingSpinner from "./components/common/LoadingSpinner"

// Lazy load components for better performance
const Features = lazy(() => import("./components/Features/Features"))
const TaskManager = lazy(() => import("./components/TaskManager/TaskManager"))
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"))
const Footer = lazy(() => import("./components/Footer/Footer"))

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Features />
          <TaskManager />
          <ContactUs />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
