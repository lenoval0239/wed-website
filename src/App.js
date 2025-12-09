import { CountdownTimer } from "./components/Timer";

import "./styles/toppage.css";
import "./styles/rsvp.css";
import "./styles/details.css";
import "./styles/navigation.css";
import "./styles/registry.css";

import TopPage, { Welcome } from "./components/TopPage";
import RSVP from "./components/RSVP";
import Details from "./components/Details";
import ScrollAnimation from "./components/Animation";
import Navigation from "./components/Navigation";
import Registry from "./components/Registry";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <TopPage />
      <Welcome />
      <Details />
      {/* <CountdownTimer /> */}
      <RSVP />
      <Registry />
      <CountdownTimer />
    </div>
  );
}

export default App;
