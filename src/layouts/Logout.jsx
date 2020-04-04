import React, { Component } from 'react'
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export class Logout extends Component {
  _isMounted = false

  state = {
    redirectToLogin: false,
  }

  componentDidMount() {
    this._isMounted = true
  }

  logout() {
    localStorage.removeItem('tokens')
    if (this._isMounted) {
      this.setState({
        redirectToLogin: true
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    if (this.state.redirectToLogin === true) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <Button size="sm" onClick={this.logout.bind(this)}>Log out</Button>
      </div>
    );

  }
}

export default Logout