import { Layout } from "./components/Layout.jsx";
import  { Mainpage } from "./pages/mainpage/Mainpage.jsx"
import './App.css'

function App() {
  return (
    <>
      <Layout>
        <main className="flex-grow-1">
          <Mainpage />
        </main>
      </Layout>
    </>
  );
}

export default App
