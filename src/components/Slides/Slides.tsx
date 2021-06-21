import React from 'react';
import {Route } from 'react-router-dom';
import Indicator from './Indicator/Indicator';
import SlideContent from './SlideContent/SlideContent'
import SlideButtons from './SlideFooter/SlideFooter'
import Result from './Result/Result';
import './slides.scss'

type slide = {
  id: number,
  question: string,
  answer: string,
  checked: boolean
}
type propsType={
  slides: Array<slide>,
  sentences: string,
  access: boolean,
  setAnswer: (data: { id:number,text:string}) => void,
  gameRestart:()=>void,
  createRandom:(id:number)=>void,
}



function Slides(props: propsType) {

  let indicatorsElems = props.slides.map((el: slide) => {
    return <Indicator id={el.id} key={el.id} condition={el.checked} />
  })
  let contentElems = props.slides.map((el: slide) => {
    return (
      <Route path={`/slide/${el.id}`} key={el.id} render={() => (<SlideContent  setAnswer={props.setAnswer} id={el.id} question={el.question} answer={el.answer}/>)
      }/>
    )
  })
  let footerElems = props.slides.map((el: slide) => {
    return (
      <Route path={`/slide/${el.id}`} key={el.id} render={() => (<SlideButtons createRandom={props.createRandom} id={el.id} maxSlides={props.slides.length} access={props.access}/>)
      } />
    )
  })



  return (

    <div className="slide">
      <div className="slide__indicators">
        {indicatorsElems}
      </div>
      <div className="slide__content">
        {contentElems}
      </div>
      {footerElems}
      <Route path={`/slide/result`} render={() => (<Result sentences={props.sentences} maxSlides={props.slides.length} gameRestart={props.gameRestart}/>)}/>
    </div>
  );
}

export default Slides;