import React from 'react'
import { Row, Col } from 'react-materialize'

const ProfilePage = () => (
  <Row>
    <Col s={12} m={3}>
      User Info
    </Col>
    <Col s={12} m={6}>
      Tweet List
    </Col>
    <Col s={12} m={3}>
      Trending Topics
    </Col>
  </Row>
)

export default ProfilePage