import getJokes from "@/app/utils/getjokes";

export const revalidate = 0
// when use server side route.js file revalidate than data is no chase in next.js

export async function GET(request) {
  const posts = await getJokes();

  return Response.json(posts);
}