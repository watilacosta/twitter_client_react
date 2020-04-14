import React from 'react'
import { Col } from 'react-materialize'
import styled from 'styled-components'

import RowNoBottomMargin from '../common/RowNoBottomMargin'

const Hashtag = (props) => (
  <RowNoBottomMargin>
    <Col s={9}>
      <a href="#">
        <BigTitle>{props.title}</BigTitle>
      </a>
    </Col>
    <Col s={2}>
      <b>{props.count}</b>
    </Col>
  </RowNoBottomMargin>
)

const BigTitle = styled.p` 
  font-size: 17px;
  font-weight: 700;
`

export default Hashtag