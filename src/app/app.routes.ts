import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardDetailComponent } from './pages/card-detail/card-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'card/:id',
    component: CardDetailComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
