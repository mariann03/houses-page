import { useState, useRef, useEffect } from 'react'

function useIntersectObserver({ root, rootMargin, threshold } = {}) {
  const [entry, setEntry] = useState(null)
  const [node, setNode] = useState(null)
  const observer = useRef(null)

  function disconnectObserver() {
    if (observer.current) observer.current.disconnect()
  }

  useEffect(
    function updateObserver() {
      disconnectObserver()
      if (!node) return
      observer.current = new IntersectionObserver(
        function updateEntry(entries) {
          setEntry(entries[0])
        },
        { root, rootMargin, threshold }
      )
      observer.current.observe(node)
      return disconnectObserver
    },
    [root, rootMargin, threshold, node]
  )
  return [entry && entry.isIntersecting, setNode, entry]
}

export default useIntersectObserver
