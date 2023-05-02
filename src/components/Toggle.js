import React from "react";
import {useState} from 'react';

function Toggle() {

  const [isOn, setIsOn] = useState(true)

  const color = isOn ? "red" : "white";

  function handleOnClick() {
      setIsOn(isOn=>!isOn);
  }

  return <button style={{ background: color }} onClick={handleOnClick}>{isOn? "OFF": "ON"}</button>;
}

export default Toggle;
