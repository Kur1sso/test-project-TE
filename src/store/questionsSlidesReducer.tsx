import{actionCreater} from './actionCreater'
import { randomCreator} from './randomCreator/randomCreator'
const SET_ANSWER: string = 'SET_ANSWER'
const GAME_RESTART: string = 'GAME_RESTART'
const CREATE_RANDOM: string = 'CREATE_RANDOM'

//types
type slideStateType = {
  slidesArr:Array<{
    id: number,
    question: string,
    answer: string,
    checked: boolean,
  }>,
  sentences:string,
  access:boolean,
}
type action={
  type: string,
  data?: {
    id: number,
    text?: string,
  }
}
type resultType={
  who: string, 
  what: string,
  where:string,
  when:string,
}

//state
let initialState: slideStateType= {
  slidesArr:[
    { 
      id: 1,
      question: 'who?',
      answer: '',
      checked: false,
    },
    {
      id: 2,
      question: 'what?',
      answer: '',
      checked: false,
    },
    {
      id: 3,
      question: 'when?',
      answer: '',
      checked: false,
    },
    {
      id: 4,
      question: 'where?',
      answer: '',
      checked: false,
    }
  ],
  sentences:'',
  access: false,
}

//funcs
const createSentence = (stateCopy: slideStateType) => {
  stateCopy.access = stateCopy.slidesArr.every((el) => { return el.checked });
  if (!stateCopy.access) return '';
  let parts: resultType = {
    who: stateCopy.slidesArr[0].answer,
    what: stateCopy.slidesArr[1].answer,
    where: stateCopy.slidesArr[3].answer,
    when: stateCopy.slidesArr[2].answer
  }
  parts.who = parts.who.charAt(0).toUpperCase() + parts.who.slice(1)
  stateCopy.sentences = `${parts.who} ${parts.what} ${parts.where} ${parts.when}`;

  return stateCopy.sentences;
}

//Reducer
const questionsSlidesReducer = (state: slideStateType = initialState, action:action) => {
  switch (action.type) {
    case SET_ANSWER: {
      let id = action.data?.id!-1;

      let stateCopy: slideStateType = { ...state };
      stateCopy.slidesArr = [...state.slidesArr];
      stateCopy.slidesArr[id!] = { ...state.slidesArr[id!]};
      let slide = stateCopy.slidesArr[id!]

      slide.answer = action.data?.text!;

      slide.checked = slide.answer !== ''? true:false
      
      stateCopy.sentences = createSentence(stateCopy)
      
      return stateCopy;
    }


    case GAME_RESTART:{
      let stateCopy: slideStateType = { ...state };
      stateCopy.slidesArr = state.slidesArr.map((el) => {
        let elCopy = { ...el };
        elCopy.answer = '';
        elCopy.checked = false;
        return elCopy
      })

      stateCopy.sentences = '';
      stateCopy.access = false;

      return stateCopy
    }


    case CREATE_RANDOM: {
      let id = action!.data!.id;
      let text = randomCreator(state.slidesArr[id-1].question);
      let newData = { id,text};
      
      let newState: slideStateType = questionsSlidesReducer(state, actionCreater.setAnswer(newData))//??
      return newState;
    }


    default:
      return state;
  }
}

export default questionsSlidesReducer;
