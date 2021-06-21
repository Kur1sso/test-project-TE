import React from 'react';

type propsType={ 
  id: number, 
  question: string, 
  answer: string, 
  setAnswer: (data: { id: number, text: string }) => void 
}


function SlideContent(props: propsType ) {
  let answerInput = React.createRef<any>();

  const changeInput = ():void=>{
    let newAnswer = answerInput.current.value;

    props.setAnswer({id:props.id,text:newAnswer});
  }


  return (
    <div className="content">
      <h2 className="content__title text-shadow-green">Question {props.id}</h2>
      <form className="content__form" >
        <label htmlFor="answer" className="content__question text-shadow-red">{props.question}</label>
        <input ref={answerInput} 
              onChange={changeInput}
              type="text" id="answer" 
              className="content__input  text-shadow-green" 
              value={props.answer} 
              autoComplete="off"
              autoFocus />
      </form>
    </div>
  );
}

export default SlideContent;
