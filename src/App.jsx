import {Routes, Route } from "react-router-dom"
import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"
import Project3 from "./pages/Project3"
import Project4 from "./pages/Project4"
import Nav from "./components/Nav"
function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" index element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
    </Routes>
    </>
  )
}

export default App
