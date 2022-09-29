import "./App.scss";

import Button from "./components/Buttons/Button";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="container">
      <SideNav />
      <div>
        <Button />
        <Button text="Blue Text" color="blue" />
        <Button size="sm" text="small" />
        <Button size="md" text="medium" />
        <Button size="lg" text="large" />
        <Button size="lg" text="outlined" variant="outlined" />
        <Button startIcon="local_grocery_store" text="Icon" />
        <Button endIcon="local_grocery_store" text="Icon" />
        <Button text="Disabled" disabled />
        <Button text="Hover" />
      </div>
    </div>
  );
}

export default App;
