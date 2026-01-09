import { useState } from 'react'
import MovieCard from "./components/MovieCard"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'
import Favourites from "./pages/Favourites"
import {MovieProvider} from "./contexts/MovieContexts.jsx"
import MovieDetails from './pages/MovieDetails.jsx'


function App() {

  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
    <NavBar />
      <main className="main-content" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;