import React from 'react';
import { NavLink } from 'react-router-dom';

import './start.scss';

function Start() {
  return (
    <div className="start">
      <h1 className="start__title text-shadow-red">Test Project game for Thinkeasy.cz </h1>
      <NavLink to='/slide/1'>
        <div className="start__btn">
          <p className="start__btn-text text-shadow-red">START</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Start;
