import { Routes } from '@angular/router';
import { CounterPageComponent } from './counter/counter-page.component';
import { HeroPageComponent } from './hero/hero-page.component';

export const routes: Routes = [

{
  path: '',
  component: CounterPageComponent
},
  {
    path: 'hero',
    component: HeroPageComponent,
  },

];
