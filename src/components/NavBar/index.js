import React from 'react'
import styles from 'styled-components'

const Nav = styles.nav`
  background: black;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  min-width: 405px;
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.75);

  h1 {
    max-width: 1440px;
    font-size: 36px;
    display: block;
    margin: auto;
  }
`

export default function NavBar() {
  return (
    <Nav>
      <h1>Houses</h1>
    </Nav>
  )
}
