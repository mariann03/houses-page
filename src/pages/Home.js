/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import HouseCard from '../components/HouseCard'
import useSwr, { useSWRPages } from 'swr'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import style from 'styled-components'
import SkeletonCard from '../components/SkeletonCard'
import { toast } from 'react-toastify'

const Section = style.section`
  max-width: 1440px;
  margin: auto;
`

const Container = style.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 425px;
`

const PER_PAGE = 10
const API_URL = 'http://app-homevision-staging.herokuapp.com/api_project/houses'
let toastId

export default function Home() {
  const placeholderRef = useRef(null)
  const [isIntersecting, setNode] = useIntersectionObserver()
  const { pages, isLoadingMore, loadMore, isReachingEnd } = useSWRPages(
    'demo-page',
    function Pages({ offset, withSWR }) {
      const { data, error } = withSWR(useSwr(`${API_URL}?page=${offset || 1}&per_page=${PER_PAGE}`))
      useEffect(() => {
        if (!error || toast.isActive(toastId)) return
        toastId = toast.error("Whoops! An error has occurred. Let's try again")
      }, [error])

      if (error || !data) {
        return (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )
      }

      return data.houses.map(house => <HouseCard key={house.id} {...house} />)
    },
    ({ data }, index) => {
      if (!data.houses.length) return null
      return index + 1
    },
    []
  )

  useEffect(() => {
    setNode(placeholderRef.current)
  }, [placeholderRef.current])

  useEffect(() => {
    if (!isIntersecting || isLoadingMore || isReachingEnd) return
    loadMore()
  }, [isIntersecting, isLoadingMore, isReachingEnd])

  return (
    <Section>
      <Container>
        {pages}
        <span ref={placeholderRef} />
      </Container>
    </Section>
  )
}
