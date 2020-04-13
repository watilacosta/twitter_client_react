import React, { Component } from 'react'
import { Icon } from 'react-materialize'

import InvisibleButtom from '../../components/common/InvisibleButton'

class UserUnFollow extends Component {
  unfollow() {
    console.log('Unfollow')
  }

  render() {
    return(
      <InvisibleButtom onClick={this.unfollow}>
        <Icon small className="grey-text text-darken-2">star_border</Icon>
      </InvisibleButtom>
    )
  }
}

export default UserUnFollow