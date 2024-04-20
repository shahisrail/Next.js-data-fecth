export default async function getJokes() {
  const res = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-store"
  })

  //  when use next.js data fecth seceond peramiter cashe overWritte default cache use no store aor no chased than this api use than this dynamic get behavior sdsds
  if (!res.ok) {
    throw new Error("problem getting")
  }
  return res.json()
}