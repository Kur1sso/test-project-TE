import React from 'react';
import {Route} from 'react-router-dom';

import Start from './components/StartPage/Start'
import SlidesContainer from "./components/Slides/SlidesContainer";
import './reset.scss'
import './globals.scss';

function App() {
  return (
    <div className='app'>
      <div className='app__inner'>
          <Route path='/start' render={()=><Start/>}/>
          <Route path='/slide' render={() => <SlidesContainer />} />
      </div>
    </div>
  );
}

export default App;
