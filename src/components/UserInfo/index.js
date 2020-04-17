import React from 'react'
import { Row, Col, Card, Icon } from 'react-materialize'
import styled from 'styled-components'

import RowNoBottomMargin from '../common/RowNoBottomMargin'
import JustifiedText from '../common/JustifiedText'
import UserFollow from '../../containers/UserFollow';
import UserUnFollow from '../../containers/UserUnFollow';

const UserInfo = (props) => (
  <Card>
    <RowNoBottomMargin>
      <Col m={8} s={8} offset="m2 s2" className="center">
        <Avatar src={props.photo} className="responsive-im circle m10" />
      </Col>
    </RowNoBottomMargin>

    <RowNoBottomMargin>
      <Col m={9} s={9}>
        <b className="grey-text text-darken-2">{ props.name }</b>
      </Col>
      <Col m={3} s={3}>
        { props.followed ? <UserFollow /> : <UserUnFollow /> }
      </Col>
    </RowNoBottomMargin>

    <Row>
      <Col m={12}>
        <JustifiedText>{ props.description }</JustifiedText>
      </Col>
    </Row>

    <RowNoBottomMargin>
      <Col m={4}>
        <a href="#!" className="grey-text text-darken-2">
          <RowNoBottomMargin className="tooltipped" data-tooltip="Tweets">
            <Col m={5}>
              <Icon>message</Icon>
            </Col>
            <Col m={6}>
              { props.tweets }
            </Col>
          </RowNoBottomMargin>
        </a>
      </Col>
      <Col m={4}>
        <a href="#!" className="grey-text text-darken-2">
          <RowNoBottomMargin className="tooltipped" data-tooltip="Followers">
            <Col m={5}>
              <Icon>people</Icon>
            </Col>
            <Col m={6}>
              { props.followers }
            </Col>
          </RowNoBottomMargin>
        </a>
      </Col>
      <Col m={4}>
        <a href="#!" className="grey-text text-darken-2">
          <RowNoBottomMargin className="tooltipped" data-tooltip="Followed">
            <Col m={5}>
              <Icon>people_outline</Icon>
            </Col>
            <Col m={6}>
              { props.follow }
            </Col>
          </RowNoBottomMargin>
        </a>
      </Col>
    </RowNoBottomMargin>
  </Card>
)

const Avatar = styled.img`
  margin-top: 1em;
  width: 100%;
`

export default UserInfo