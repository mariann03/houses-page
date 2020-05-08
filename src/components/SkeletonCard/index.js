import React from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

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
`

const ImageSkeleton = styled.div`
  flex-grow: 1;
  margin-bottom: 10px;
  border-radius: 4px;
`

const Description = styled.div`
  flex-grow: 0;
`
export default function SkeletonCard() {
  return (
    <Item>
      <ImageSkeleton>
        <Skeleton height="100%" />
      </ImageSkeleton>
      <Description>
        <Skeleton count={3} wrapper={props => <p {...props} />} />
      </Description>
    </Item>
  )
}
