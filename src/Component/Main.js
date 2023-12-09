import { Component } from 'react';
import {CommonContext} from './CommonContext';

class Main extends Component{
  

  render()
  {
    return(
        <div className='App'>
      <CommonContext.Consumer value={this.state}>
        {
            ({color})=>(
                <h1 style={{backgroundColor:color}}>Hello, This is main page...!!!</h1>
            )
        }
      </CommonContext.Consumer>
      </div>
    );
  }

}

export default Main;
