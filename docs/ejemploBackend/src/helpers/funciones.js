import jwt from 'jsonwebtoken';

export function generarToken(payload) {
  return new Promise((resolver, rechazar) => {
    jwt.sign(payload, 'llaveSecreta', { expiresIn: '1h' }, (error, token) => {
      if (error) {
        rechazar({ error });
      } else {
        resolver({ token });
      }
    });
  });
}
