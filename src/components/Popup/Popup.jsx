import React  from 'react';
import done from '../../images/done.png';
import './Popup.scss';

function Popup({ prize }) {
  return (
    <div className="popup">
      <img className="popup__image" src={done} alt="Good job!" />
      <h1 className="popup__title">You won {prize}!</h1>
    </div>
  )
}



export default Popup;