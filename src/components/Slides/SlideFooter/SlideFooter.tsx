import React from 'react';
import { NavLink } from 'react-router-dom';


function SlideFooter(props: { id: number, maxSlides: number, access: boolean, createRandom:(id:number)=>void}) {

  const linkCreater=(event:'NEXT'|'BACK'):number |string=>{
    
    let getNewId = event === 'BACK' ? props.id - 1 : props.id+1;
    if (getNewId == 0) return props.id;
    if (getNewId > props.maxSlides) {
      if (props.access === true) { return '/slide/result' } else getNewId =props.id;
    }

    let link:string = '/slide/' + getNewId
    return link;
    }

  const navButtonActiveClass = (event: 'NEXT' | 'BACK'):string =>{
    if ((props.id == 1 && event == 'BACK') ||(!props.access && event == 'NEXT' && props.id == props.maxSlides)) {
      return 'inactive-btn';
    }
    return 'text-shadow-green'
  }

  const createRandom = ()=> props.createRandom(props.id);


  return (
    <div className="slide__footer">
      <div className="button-wrapper">
        <NavLink to={`${linkCreater('BACK')}`}><div className="footer__btn">
          <p className={`footer__btn-text ${navButtonActiveClass('BACK')}`}>BACK</p>
          </div></NavLink>
        </div>
      <div className="button-wrapper button-wrapper-random">
        <div className="footer__btn" onClick={createRandom}>
          <p className="footer__btn-text text-shadow-red" >RANDOM</p>
        </div>
      </div>
      <div className="button-wrapper">
        <NavLink to={`${linkCreater('NEXT')}`}><div className="footer__btn">
          <p className={`footer__btn-text ${navButtonActiveClass('NEXT')}`}>NEXT</p>
        </div></NavLink >
      </div>
    </div>
  );
}

export default SlideFooter;
