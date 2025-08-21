import { generateJWT } from '../utils/jwt';
import { verifyPassword } from '../utils/crypto';

export async function handleAuth(request, env) {
  if (request.method === 'POST') {
    const { username, password } = await request.json();
    const user = await env.USER_DATA.get(username);

    if (user && verifyPassword(password, user.passwordHash)) {
      const token = generateJWT({ username, role: user.role }, env.JWT_SECRET);
      return new Response(JSON.stringify({ token }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }
  return new Response('Method Not Allowed', { status: 405 });
}
