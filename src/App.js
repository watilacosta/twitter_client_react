import React, { Component } from 'react';
import Header from '../src/components/Header'
import Container from 'react-materialize/lib/Container';
import ProfilePageContainer from './containers/ProfilePageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <ProfilePageContainer />
        </Container>
      </div>
    )
  }
}

export default App;