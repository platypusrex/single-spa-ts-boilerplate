import { registerApplication, start } from 'single-spa';

registerApplication(
  'app1',
  () => import('./src/app1/index'),
  (location) => location.pathname.startsWith('/app1')
);

registerApplication(
  'app2',
  () => import('./src/app2/index'),
  (location) => location.pathname.startsWith('/app2')
);

start();