import React from 'react';
import { NavLink } from 'react-router-dom';


function Indicator(props: {id:number, key:number, condition:boolean}) {

  const addClassMod = ():string => {
    if(props.condition){
      return '-green'
    }
    return '-red'
  }


  return (
    <NavLink to={`/slide/${props.id}`}>
      <div className="indicator">
        <div className="indicator__button">
            <p className={`indicator__count text-shadow${addClassMod()}`}>{props.id}</p>
        </div>
        <div className={`indicator__light indicator__light${addClassMod()}`}></div>
      </div>
    </NavLink >
  );
}

export default Indicator;
