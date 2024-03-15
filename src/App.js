import './App.css';
import MenuStyledComponents from "./komponenty/MenuStyledComponents";
import {InfoPanelContainer} from "./komponenty/Klasowy";

function App() {
  return (
    <div className="App">
        <MenuStyledComponents />
        <InfoPanelContainer data={[
            { title: "Panel 1", content: "Treść 1" },
            { title: "Panel 2", content: "Treść 2" },
            { title: "Panel 3", content: "Treść 3" }
        ]} />
    </div>
  );
}

export default App;
