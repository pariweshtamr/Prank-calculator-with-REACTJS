import { useState } from 'react';
import {BtnContainer} from './components/btnContainer/Btncontainer';
import { Display } from './components/btnContainer/display/Display';
import failSound from "./assets/a.mp3"
import './App.css';

const App = () => {
const[textToDisplay, setTextToDisplay]=useState("");
const[isOff, setIsOff] = useState(false);
const[isPrank, setIsPrank] = useState(false);
const[audio] = useState(new Audio(failSound));

const handleOnButtonClick = val => {

if(val === "=")
{
  return onTotal();
} 

isPrank && setIsPrank(false);

if(val === "AC")
{
  return setTextToDisplay("");
}
if(val === "C") 
{
  const str = textToDisplay.toString().slice(0, -1);

  return setTextToDisplay(str);
}
if(val === "Off") 
{
  return setIsOff(!isOff);
}

  setTextToDisplay(textToDisplay + val);
};

const onTotal = () => {
  const randomNum = randomVal();

  if(randomNum > 0) {
    setIsPrank(true);
    audio.play();
  }
  const total = eval(textToDisplay) + randomNum;
  setTextToDisplay(total.toString());
};


const randomVal = () => {
  const rand = Math.floor(Math.random() * 10); //0 - 9

  return rand < 6 ? rand : 0;
};

  return (
    <div>
    <h1>Prank Calculator</h1>
    <div className="mainParent">
      <div id="lastResult"></div>
    <Display 
    isPrank = {isPrank}
    isOff = {isOff}
    textToDisplay = {textToDisplay}
     />
   <BtnContainer handleOnButtonClick = {handleOnButtonClick} />
    </div>
    </div>
  );
};

export default App;
