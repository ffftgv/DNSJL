import jwt from 'jsonwebtoken';

export function generateJWT(payload, secret, expiresIn = '1h') {
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyJWT(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}
