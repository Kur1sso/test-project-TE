const SET_ANSWER: string = 'SET_ANSWER'
const GAME_RESTART: string = 'GAME_RESTART'
const CREATE_RANDOM: string = 'CREATE_RANDOM'

export const actionCreater = {
  setAnswer(data:{id:number,text:string}) {
    return { type: SET_ANSWER,data:{id:data.id,text:data.text} }
  },
  gameRestart(){
    return { type: GAME_RESTART}
  },
  createRandom(id: number){
    return { type: CREATE_RANDOM, data: {id: id}}
  },
}