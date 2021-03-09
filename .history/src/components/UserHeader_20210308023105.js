import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'

export class UserHeader extends Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userID)
  }
  
  render() {
    return (
      <div>
        User header
      </div>
    )
  }
}

export default connect(null,{fetchUser})(UserHeader)
