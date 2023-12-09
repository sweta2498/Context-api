import { Component } from 'react';

import {CommonContext} from './CommonContext';

class Header extends Component{
  

  render()
  {
    return(
        <div>
      <CommonContext.Consumer value={this.state}>
        {
            ({color})=>(
                <h1 style={{backgroundColor:color}}> Header page...!!!</h1>
            )
        }
      </CommonContext.Consumer>
      </div>
    );
  }

}

export default Header;
