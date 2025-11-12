import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Index } from "./pages/index/Index.jsx";
import { Overtidsmat } from "./pages/overtidsmat/Overtidsmat.jsx";
import { Catering } from "./pages/catering/catering.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/overtidsmat" element={<Overtidsmat />} />
            <Route path="/catering" element={<Catering />} />
          </Routes>
        </main>
      </Layout>
    </>
  );
}

export default App;
