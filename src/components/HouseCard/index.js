import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 12px -5px rgba(0, 0, 0, 0.75);
  height: 480px;
  width: 380px;
  background: white;
  transition: ease all 200ms;

  :hover {
    transform: scale(1.05);
  }
`

const Image = styled.img`
  object-fit: cover;
  flex-grow: 1;
  margin-bottom: 10px;
  border-radius: 4px;
`

const Description = styled.div`
  flex-grow: 0;
`

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

export default function HouseCard({ photoURL, address, homeowner, price }) {
  const priceParsed = new Intl.NumberFormat().format(price)
  return (
    <Item>
      <Image src={photoURL} alt="" />
      <Description>
        <Field>
          <i className="fa fa-map-marker-alt" />
          {address}
        </Field>
        <Field>
          <i className="fa fa-user" /> {homeowner}
        </Field>
        <Field>
          <i className="fa fa-dollar-sign" /> {priceParsed}
        </Field>
      </Description>
    </Item>
  )
}
