import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'

export class UserHeader extends Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userID)
  }
  
  render() {
    const user=this.props.users.find((user)=>user.id===this.props.userId)
    if(!user){
      return null
    }
    return (
      <div className="header">
        hello
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {users:state.users}
}

export default connect(mapStateToProps,{fetchUser})(UserHeader)
