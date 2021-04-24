import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/home/home.module').then(module => module.HomeModule)
  }
];
export default routes;