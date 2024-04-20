import getJokes from "./utils/getjokes";
// import { cookies } from 'next/headers'

export default async function Home() {
  // const theme = cookies().get('theme') {" when use cookies or headers next.js dynamically load data why not use cookies here every request get new data"}
  const jokes = await getJokes();


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      {jokes.value}
    </main>
  );
}
