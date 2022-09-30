import "./App.scss";

import Button from "./components/Buttons/Button";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="container">
      <SideNav />
      <div>
        <Button />
        <Button text="Default H" />
        <Button text="Blue Text" color="blue" />
        <Button text="Blue Hover" />
        <Button text="Disabled S" disabledShadow />
        <Button text="Disabled" disabled />
        <Button text="Disabled Text" disabled />
        <Button text="Text Var" />
        <Button text="Text Hover" />
        <Button startIcon="local_grocery_store" text="Icon" />
        <Button endIcon="local_grocery_store" text="Icon" />
        <Button size="sm" text="small" />
        <Button size="md" text="medium" />
        <Button size="lg" text="large" />
        <Button />
        <Button text="Primary" color="primary" />
        <Button text="Secondary" color="secondary" />
        <Button text="Danger" color="danger" />
        <Button text="Default H" />
        <Button text="Primary" color="primary" />
        <Button text="Secondary" color="secondary" />
        <Button text="Danger" color="danger" />
      </div>
    </div>
  );
}

export default App;
