import { handleAuth } from './api/auth';
import { handleDNS } from './api/dns';
import { handleUsers } from './api/users';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.startsWith('/api/login')) {
      return handleAuth(request, env);
    } else if (path.startsWith('/api/dns')) {
      return handleDNS(request, env);
    } else if (path.startsWith('/api/users')) {
      return handleUsers(request, env);
    } else {
      return new Response(await env.ASSETS.fetch(request));
    }
  }
};
