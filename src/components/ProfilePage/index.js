import React from 'react'
import { Row, Col } from 'react-materialize'

import MainLayout from '../MainLayout'
import UserInfoContainer from '../../containers/UserInfoContainer'
import TweetInfoContainer from '../../containers/TwitterListContainer'
import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer'

const ProfilePage = () => (
  <MainLayout>
    <Row>
      <Col s={12} m={3}>
        <UserInfoContainer />
      </Col>
      <Col s={12} m={6}>
        <TweetInfoContainer />
      </Col>
      <Col s={12} m={3}>
        <TrendingTopicsContainer />
      </Col>
    </Row>
  </MainLayout>
)

export default ProfilePage