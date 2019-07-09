import { registerApplication, start } from 'single-spa';

registerApplication(
  'app1',
  () => import('app1/src'),
  (location) => location.pathname.startsWith('/app1')
);

registerApplication(
  'app2',
  () => import('app2/src'),
  (location) => location.pathname.startsWith('/app2')
);

start();