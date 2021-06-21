import React from 'react';
import { NavLink } from 'react-router-dom';


function Result(props: { sentences: string,maxSlides:number, gameRestart:()=>void}) {
  const gameRestart = ():void =>{
    props.gameRestart();
  }

  return (
    <div className="result ">
      <div className="result__text-inner">
        <h2 className="result__title text-shadow-green">Your sentense is:</h2>
        <p className="result__sentences text-shadow-green">{props.sentences}</p>
      </div>
      <div className="result__footer slide__footer">
        <NavLink to={`/slide/${props.maxSlides}`}><div className="footer__btn">
          <p className="footer__btn-text text-shadow-green">BACK</p>
        </div></NavLink>
        <NavLink to={`/slide/1`}><div className="footer__btn" onClick={gameRestart}>
          <p className="footer__btn-text text-shadow-red">RESTART</p>
        </div></NavLink>
      </div>
    </div>
  );
}

export default Result;
