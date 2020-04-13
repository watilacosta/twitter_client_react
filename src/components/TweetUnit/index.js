import React from 'react'
import { Row, Col, Card, Icon, Dropdown, NavItem } from 'react-materialize'
import styled from 'styled-components'

import RowNoBottomMargin from '../common/RowNoBottomMargin'
import InvisibleButton from '../common/InvisibleButton'

const TweetUnit = (props) => (
  <Card>
    <RowNoBottomMargin>
      <Col s={6} m={2} offset='s3'>
        <Avatar src={props.user.photo} className="responsive-img circle" />
      </Col>
      <Col s={12} m={10}>
        <RowNoBottomMargin>
          <Col s={10} m={10}>
            <b>{props.user.name} - {props.time}</b>
          </Col>
          <Col s={12} m={2} className="right-align">
            <Dropdown trigger={
              <InvisibleButton>
                <Icon>expand_more</Icon>
              </InvisibleButton>}>
              <NavItem>
                <span className="grey-text text-darken-2">Edit</span>
              </NavItem>
              <NavItem>
                <span className="grey-text text-darken-2">Remove</span>
              </NavItem>
            </Dropdown>
          </Col>
        </RowNoBottomMargin>
      </Col>
    </RowNoBottomMargin>

    <Row>
      <Col s={12} m={12}>{props.body}</Col>
    </Row>

    <RowNoBottomMargin>
      <Col s={1} m={1}>
        <InvisibleButton>
          <Icon>thumb_up</Icon>
        </InvisibleButton>
      </Col>
      <Col s={1} m={1}>
        <InvisibleButton>
          <Icon>repeat</Icon>
        </InvisibleButton>
      </Col>
    </RowNoBottomMargin>
  </Card>
)

const Avatar = styled.img`
  width: 100%;
`

export default TweetUnit