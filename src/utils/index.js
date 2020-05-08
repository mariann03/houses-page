export default async function fetchJson(...args) {
  const res = await fetch(...args)
  if (res.status >= 400) {
    throw new Error('API Error', await res.json())
  }

  return res.json()
}
