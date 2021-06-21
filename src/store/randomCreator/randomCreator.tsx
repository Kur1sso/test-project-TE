import { nounsList, verbsList, placeList, timeList} from './wordsList'

export const randomCreator = (question: string): string=> {
  const random = (max:number):number=> {
    return Math.floor(Math.random() * max);
  }

  switch (question) {
    case 'who?':{
      let type = ['animals', 'names', 'possessives', 'relatives', 'names s', 'relatives s']
      let randomAnswer:Array<string> =[];

      let randomAnswerWho = (types:Array<string>)=>{
        if (types.includes('none') && random(20) == 1)  return;
        
        let randomNum = random(nounsList.length);
        let randomList = nounsList[randomNum];
        let wordType:string =  randomList.type;

        if (!types.includes(wordType)){
          randomAnswerWho(types);
          return;
        }

        let wordValue: any = randomList.value[random(randomList.value.length)];
        if (wordType === 'names s' || wordType ==='relatives s'){
          randomAnswer.push(wordValue+`'s`);
        } else { randomAnswer.push(wordValue)}

        let nextType:Array<string> = []
        if (wordType === 'animals' || wordType === 'names'||wordType === 'none') return;
        if (wordType === 'names s' || wordType ==='relatives s') nextType = ['animals', 'relatives']
        if (wordType === 'possessives') nextType = ['animals', 'relatives','relatives+']
        if (wordType === 'relatives') nextType = ['names','none']

        randomAnswerWho(nextType);
      }

      randomAnswerWho(type);

      let randomResult = randomAnswer.join(' ');
      
      randomResult = randomResult.charAt(0).toUpperCase() + randomResult.slice(1);

      return randomResult;
    }
      
    case 'what?': {
      let randomResult = verbsList[0].value[random(verbsList[0].value.length)]
      return randomResult+'s';
    }

    case 'where?': {
      let randomResult = placeList[0].value[random(placeList[0].value.length)]
      return 'in ' + randomResult;
    }

    case 'when?': {
      let type = ['time', 'timeOfTheYear', 'day',];
      let randomAnswer: Array<string> = [];

      let randomAnswerWhen = (types: Array<string>) => {

        let randomNum = random(types.length);
        let wordType: string = types[randomNum];
        let wordValue:string ='';

        if(wordType == 'none') return;
        if (wordType == 'time') wordValue = 'at ' + random(24) + ':' + (('0' +(random(60) + 1)).slice(-2));
        if (wordType == 'timeOfTheYear') wordValue = 'at ' + timeList[0].value[random(timeList[0].value.length)];
        if (wordType == 'day') wordValue = 'on '+ timeList[1].value[random(timeList[1].value.length)];

        randomAnswer = [...randomAnswer, wordValue];
        if (wordType == 'time'|| wordType == 'timeOfTheYear') return;
        if (wordType == 'day') randomAnswerWhen(['time', 'none']);

        return;
      }
      randomAnswerWhen(type);
      let randomResult = randomAnswer.join(' ');

      return randomResult;
    }
  
    default:{
      return '';
    }
  }
}
