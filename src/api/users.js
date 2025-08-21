import { hashPassword, verifyPassword } from '../utils/crypto';
import { validateDomain } from '../utils/validation';

export async function handleUsers(request, env) {
  if (request.method === 'POST') {
    const { username, password, domain } = await request.json();

    if (!validateDomain(domain)) {
      return new Response(JSON.stringify({ error: 'Invalid domain' }), { status: 400 });
    }

    const passwordHash = await hashPassword(password);
    await env.USER_DATA.put(username, JSON.stringify({ passwordHash, domain, role: 'user' }));

    return new Response(JSON.stringify({ message: 'User created successfully' }), { status: 201 });
  }

  return new Response('Method Not Allowed', { status: 405 });
}
