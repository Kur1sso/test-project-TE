import React from 'react';
import { connect } from 'react-redux';
import { actionCreater } from '../../store/actionCreater';

import Slides from './Slides';

let mapStateToProps = (state:any) => {
  return {
    slides: state.slides.slidesArr,
    sentences: state.slides.sentences,
    access: state.slides.access
  }
}


let mapDispatchToProps = (dispatch:any) => {
  return {
    setAnswer: (data: { id: number, text: string }): void => {
      dispatch(actionCreater.setAnswer(data));
    },
    gameRestart: (): void => {
      dispatch(actionCreater.gameRestart());
    },
    createRandom:(id:number): void =>{
      dispatch(actionCreater.createRandom(id));
    }
  }
}

const SlidesContainer = connect(mapStateToProps, mapDispatchToProps)(Slides)
export default SlidesContainer;
