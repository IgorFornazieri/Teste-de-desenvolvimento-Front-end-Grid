import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridModelComponent } from './components/grid-model/grid-model.component';

const routes: Routes = [
  { path: 'grid', component: GridModelComponent },
  { path: '**', redirectTo: '/grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
