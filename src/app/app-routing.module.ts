import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './componentes/componente1/comp1/comp1.component';
import { Comp2Component } from './componentes/componente2/comp2/comp2.component';


const routes: Routes = [
  {
  path: '', component: Comp1Component
  },
  {
  path: 'web', component: Comp2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
