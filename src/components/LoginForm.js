import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Button, Card, CardItem, Input, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { connect } from 'react-redux'

class LoginForm extends Component {

  onButtonPress(){
    const {email, password } = this.props
    this.props.loginUser({email, password})
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size={'large'}/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    )
  }

onEmailChange (text)  {
  this.props.emailChanged(text)
}

onPasswordUpdate (text) {
  this.props.passwordChanged(text)
}

  render () {
    // console.log('Loginprops', this.props)
    return (
        <Card>
          <CardItem>
            <Input
              placeholder='user@gmail.com'
              label={'Email'}
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
              />
          </CardItem>

          <CardItem>
            <Input
              secureTextEntry
              placeholder='password'
              label={"Password"}
              value={this.props.password}
              onChangeText={this.onPasswordUpdate.bind(this)}
            />
          </CardItem>

          <Text style={styles.errorTextStyle}>{this.props.error}</Text>

          <CardItem>
            {this.renderButton()}
          </CardItem>
        </Card>
    )
  }
}

styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}


mapStateToProps = ( state ) => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading }
}

export default connect(mapStateToProps,
  {emailChanged, passwordChanged, loginUser})(LoginForm)
