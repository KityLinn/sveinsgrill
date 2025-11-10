import { Herosection } from "./Herosection.jsx";
import { Favoritter } from "./Favorittersection.jsx";
import { Meny } from "./Menysection.jsx";

export function Index() {
  return (
    <>
      <Herosection />
      <Favoritter />
      <Meny />
    </>
  );
}
