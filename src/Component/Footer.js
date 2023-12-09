import { Component } from 'react';

import {CommonContext} from './CommonContext';

class Footer extends Component{
  

  render()
  {
    return(
        <div className='App'>
      <CommonContext.Consumer value={this.state}>
        {
            ({color})=>(
                <h1 className='Footer' style={{backgroundColor:color}}> Footer page...!!!</h1>
            )
        }
      </CommonContext.Consumer>
      </div>
    );
  }

}

export default Footer;
