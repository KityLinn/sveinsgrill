import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Herosection from "./components/Herosection.jsx"
import Favoritter from "./components/Favorittersection.jsx"
import Meny from "./components/Menysection.jsx"
import './App.css'

function App() {


  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Herosection />
        <Favoritter />
        <Meny />
      </main>
      <Footer />
    </>
  )
}

export default App
