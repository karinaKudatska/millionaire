import React from 'react';
import ClassNames from 'classnames';
import './BurgerButton.scss';

function Burger({ active, setActive }) {
  return (
    <button 
      type="button" 
      className={ClassNames(
        'burger',
        { 'burger__active': active }
      )}
      onClick={() => setActive(!active)}
    />
  );
}

export default Burger;
