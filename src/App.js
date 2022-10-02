import "./App.scss";

import ButtonDisplay from "./components/Buttons/ButtonDisplay";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="container">
      
      <SideNav />
      <div>
        <ButtonDisplay />
      </div>
    </div>
  );
}

export default App;
