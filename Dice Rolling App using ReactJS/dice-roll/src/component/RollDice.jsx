import React, { useEffect, useState } from 'react';
import Die from './Die';
import '../style/rolldice.css';
const RollDice = () => {
  const defaultNumbers = ['one', 'two', 'three', 'four', 'five', 'six'];
  const initialState = {
    die1: 'one',
    die2: 'one',
    rolling: false
  };
  const [state, setState] = useState(initialState);
  const roll = () => {
    debugger
    const newDie1 = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];
    const newDie2 = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];;
    setState({ die1: newDie1, die2: newDie2, rolling: true });
    setTimeout(() => {
      setState(prevsd => ({ ...prevsd, rolling: false }))
    }, 1000)
  }
  return (
    <div class="container">
      <div class="rolldice">
        <Die face={state.die1} rolling={state.rolling} />
        <Die face={state.die2} rolling={state.rolling} />
      </div>
      <button onClick={roll}>{state.rolling ? 'Rolling' : 'Roll Dice'}</button>
    </div>
  )
}

export default RollDice