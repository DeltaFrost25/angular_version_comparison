import { Routes } from '@angular/router';
import { ColorService } from './services/color.service';

export const routes: Routes = [
  {
    path: 'change-detection',
    providers: [ColorService],
    loadComponent: () =>
      import('./pages/changeDetection/changeDetection.page').then(
        (c) => c.ChangeDetectionPage
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'change-detection' },
];
