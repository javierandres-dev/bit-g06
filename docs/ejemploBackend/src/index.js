import 'dotenv/config';
import servidor from './servidor.js';

const puerto = servidor.get('port');

servidor.listen(puerto, () => {
  console.log(`Servidor ejecutandose en el puerto: ${puerto}`);
});
