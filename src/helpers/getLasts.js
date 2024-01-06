export const getLasts = async () => {
  const url = "http://localhost:8080/ultimos"
  const resp = await fetch(url)
  const data = await resp.json()
  return data.ultimos
}
