export async function handleDNS(request, env) {
  const url = new URL(request.url);
  const zoneId = url.searchParams.get('zone');

  if (request.method === 'GET') {
    const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
      headers: { Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}` }
    });
    return new Response(response.body, { status: response.status });
  }
  // 其他操作逻辑...
}
