import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./chart.page').then((c) => c.ChartPage),
  },
];

export const ChartRoutes = routes;
