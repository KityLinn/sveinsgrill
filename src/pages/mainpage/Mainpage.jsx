import { Herosection } from "./Herosection.jsx";
import { Favoritter } from "./Favorittersection.jsx";
import { Meny } from "./Menysection.jsx"

export function Mainpage() {
  return (
    <>
      <main className="flex-grow-1">
        <Herosection />
        <Favoritter />
        <Meny /> 
      </main>
    </>
  );
}