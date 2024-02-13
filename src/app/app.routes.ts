import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    pathMatch: "full",
    loadComponent: () =>
      import('./pages/home/home.page').then((c) => c.HomePage),
  },
  {
    path: 'table',
    pathMatch: "full",
    loadComponent: () =>
      import('./pages/table/table.page').then((c) => c.TablePage),
  },
  {
    path: 'chart',
    pathMatch: "full",
    loadChildren: () =>
      import('./pages/chart/chart.routing').then((r) => r.ChartRoutes),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
