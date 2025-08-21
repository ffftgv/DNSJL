export function validateIPv6(ip) {
  const ipv6Regex = /^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;
  return ipv6Regex.test(ip);
}

export function validateDomain(domain) {
  const domainRegex = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.[A-Za-z]{2,6}$/;
  return domainRegex.test(domain);
}
