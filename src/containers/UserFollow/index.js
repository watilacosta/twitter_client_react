import React, { Component } from 'react'
import { Icon } from 'react-materialize'

import InvisibleButton from '../../components/common/InvisibleButton'

class UserFollow extends Component {
  follow() {
    console.log('Follow')
  }

  render() {
    return(
      <InvisibleButton onClick={this.follow}>
        <Icon small className="grey-text text-darken-2">star</Icon>
      </InvisibleButton>
    )
  }
}

export default UserFollow