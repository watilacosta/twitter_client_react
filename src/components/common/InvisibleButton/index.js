import styled from 'styled-components'

const InvisibleButton = styled.button`
  border: none;
  background: none;
  padding: 0;
    &:focus {
      background: none;
    }
`

export default InvisibleButton