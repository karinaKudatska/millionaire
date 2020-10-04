import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './BurgerButton.scss';

function Burger({ active, setActive }) {
  return (
    <button
      type="button"
      className={ClassNames(
        'burger',
        { burger__active: active },
      )}
      onClick={() => setActive(!active)}
    >
      .
    </button>
  );
}

Burger.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Burger;
