export async function getUser(id) {
  const res = await fetch(`/api/users/${id}`)
  if (!res.ok) throw new Error('network error')
  return res.json()
}