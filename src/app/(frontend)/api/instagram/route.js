// src/app/api/instagram/route.js

export async function GET() {
  const token = process.env.IG_ACCESS_TOKEN
  const userId = process.env.IG_USER_ID

  if (!token || !userId) {
    return new Response(JSON.stringify({ error: 'Missing IG_ACCESS_TOKEN or IG_USER_ID' }), {
      status: 500,
    })
  }

  const url = `https://graph.facebook.com/v17.0/${userId}/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp&access_token=${token}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.error) {
      console.error('Instagram API Error:', data.error)
      return new Response(JSON.stringify({ error: data.error.message }), { status: 500 })
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Fetch Error:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch Instagram feed' }), {
      status: 500,
    })
  }
}
