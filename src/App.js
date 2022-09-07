import "./styles.scss";
import TopNavigation from "./components/nav/TopNavigation";
import PokeCard from "./components/body/PokeCard";

export default function App() {
  return (
    <div className="App">
      <TopNavigation />
      <br />
      <div className="grid grid-cols-4">
        <PokeCard />
      </div>
    </div>
  );
}
