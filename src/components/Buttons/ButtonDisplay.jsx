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
        <div className="column">
          <p>Button</p>
          <Button />
        </div>
        <div className="column">
          <p> &:hover, &:focus </p>
          <Button hover text="Default H" />
        </div>
      </div>
      <div>
        <div className="column">
          <p>Button variant ="outlined"</p>
          <Button color="blue" variant="outlined" background="#FFFFFF" />
        </div>
        <div className="column">
          <p>&:hover, &:focus</p>
          <Button
            text="Blue Hover"
            color="blue"
            variant="outlined"
            background="#FFFFFF"
          />
        </div>
      </div>
      <div>
        <div className="column">
          <p>Button variant="text</p>

          <Button color="blue" background="plain" text="Text Var" />
        </div>
        <div className="column">
          <p>&:hover, &:focus</p>
          <Button color="blue" background="plain" text="Text Hover" />
        </div>
      </div>
      <div>
        <div className="column">
          <p>Button disableShadow</p>
          <Button background="blue" color="white" disabledShadow />
        </div>
      </div>
      <div>
        <div className="column">
          <p>Button disabled</p>
          <Button text="Disabled" disabled />
        </div>
        <div className="column">
          <p>Button variant="text disabled</p>
          <Button text="Disabled" background="plain" disabled />
        </div>
      </div>
      <div>
        <div className="column">
          <p>Start Icon</p>
          <Button
            color="white"
            startIcon="local_grocery_store"
            background="blue"
          ></Button>
        </div>
        <div className="column">
          <p>End Icon</p>
          <Button
            color="white"
            endIcon="local_grocery_store"
            background="blue"
          />{" "}
        </div>
      </div>
      <div>
        <div className="column">
          <p>Button size small</p>
          <Button size="sm" background="blue" color="white" />
        </div>
        <div className="column">
          <p>Button size medium</p>
          <Button size="md" background="blue" color="white" />
        </div>
        <div className="column">
          <p>Button size large</p>
          <Button size="lg" background="blue" color="white" />
        </div>
      </div>
      <div>
        <div className="column">
          <p> color default</p>
          <Button />
        </div>
        <div className="column">
          <p>color primary</p>
          <Button text="Primary" color="primary" />
        </div>
        <div className="column">
          <p>color secondary</p>
          <Button text="Secondary" color="secondary" />
        </div>
        <div className="column">
          <p>color danger</p>
          <Button text="Danger" color="danger" />
        </div>
      </div>
      <div>
        <div className="column">
          <p>&:hover, &:focus</p>
          <Button text="Default H" />
        </div>
        <div className="column bottom-row">
          <Button text="Primary" color="primary" />
        </div>
        <div className="column bottom-row">
          <Button text="Secondary" color="secondary" />
        </div>
        <div className="column bottom-row">
          <Button text="Danger" color="danger" />
        </div>
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
