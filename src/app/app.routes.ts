import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((c) => c.HomePage),
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./pages/table/table.page').then((c) => c.TablePage),
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./pages/chart/chart.routing').then((r) => r.ChartRoutes),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
