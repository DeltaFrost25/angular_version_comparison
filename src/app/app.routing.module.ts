import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageModule } from './modules/chart/chart.module';
import { TablePageModule } from './modules/table/table-page.module';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomeModule,
    // loadChildren: () =>
    //   import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'chart',
    loadChildren: () => ChartPageModule,
    // loadChildren: () =>
    //   import('./modules/chart/chart.module').then((m) => m.ChartPageModule),
  },
  {
    path: 'table',
    loadChildren: () => TablePageModule,
    // loadChildren: () =>
    //   import('./modules/table/table-page.module').then(
    //     (m) => m.TablePageModule
    //   ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
