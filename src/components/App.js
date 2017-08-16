import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

//Components
import config from '../firebaseAPI.js'
import Albums from './Albums'
import LoginForm from './LoginForm'
import { Button, Header, Spinner, CardItem } from './common'

class App extends Component {
  state = { loggedIn: null}

  componentWillMount () {
    firebase.initializeApp( config )

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <CardItem>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardItem>
            <CardItem>
              <Albums/>
            </CardItem>
          </View>
        )
      case false:
        return (
          <View>
            <Header headerText={'Authentication'}/>
            <LoginForm />
          </View>
        )
      default:
        return <Spinner size='large' />;
    }
  }

  render () {
    return (
      <View>
          {this.renderContent()}
      </View>
    )
  }
}

export default App
