import "./ButtonDisplay.scss";

import Button from "./Button";
import React from "react";

const ButtonDisplay = () => {
  return (
    <div className="button-container">
      <div>
        <h1 className="header">Buttons</h1>
      </div>

      <div>
        <Button />
        <Button hover text="Default H" />
      </div>
      <div>
        <Button color="blue" variant="outlined" background="#FFFFFF" />
        <Button
          text="Blue Hover"
          color="blue"
          variant="outlined"
          background="#FFFFFF"
        />
      </div>
      <div>
        <Button color="blue" background="plain" text="Text Var" />
        <Button color="blue" background="plain" text="Text Hover" />
      </div>
      <div>
        <Button background="blue" color="white" disabledShadow />
      </div>
      <div>
        <Button text="Disabled" disabled />
        <Button text="Disabled" background="plain" disabled />
      </div>
      <div>
        <Button
          color="white"
          startIcon="local_grocery_store"
          background="blue"
        />
        <Button color="white" endIcon="local_grocery_store" background="blue" />
      </div>
      <div>
        <Button size="sm" background="blue" color="white" />
        <Button size="md" background="blue" color="white" />
        <Button size="lg" background="blue" color="white" />
      </div>
      <div>
        <Button />
        <Button text="Primary" color="primary" />
        <Button text="Secondary" color="secondary" />
        <Button text="Danger" color="danger" />
      </div>
      <div>
        <Button text="Default H" />
        <Button text="Primary" color="primary" />
        <Button text="Secondary" color="secondary" />
        <Button text="Danger" color="danger" />
      </div>
      <div>
        <footer>
          <p>created by mzounlome - devChallenges.io</p>
        </footer>
      </div>
    </div>
  );
};

export default ButtonDisplay;
