/**
 * Created by ttnd on 27/12/16.
 */
import React, {Component} from 'react';
import User from './user/user.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfUser : [{firstUser : 'AB',
        secUser:'BC'}, {
          firstUser : 'US',
          secUser:'INDIA'
        }
        ]
    }

  }


  render() {
    return (
      <div>
        Working
        <User/>
      </div>
    )
  }

}

