import React from 'react';
import PropTypes from 'prop-types';
import done from '../../images/done.png';
import './Popup.scss';

function Popup({ prize }) {
  return (
    <div className="popup">
      <img className="popup__image" src={done} alt="Good job!" />
      <h1 className="popup__title">{`You won ${prize}!`}</h1>
    </div>
  );
}

Popup.propTypes = {
  prize: PropTypes.string.isRequired,
};

export default Popup;
