import {Gateway} from '..';
import * as config from '../config';

const gateway = new Gateway();

(async () => {
  await gateway.listen();
})()
.catch((err) => {
  console.error('ERROR:', err);
  gateway.close();
});
