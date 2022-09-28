import "./App.scss";

import Button from "./components/Buttons/Button";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="container">
      <SideNav />
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;
