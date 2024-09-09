import React from 'react'
import '../style/die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Die = ({ face, rolling }) => {
  debugger
  return (
    <div>
      <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className=
        {`Die ${rolling && 'Die-shaking'}`} />
    </div >
  )
}

export default Die