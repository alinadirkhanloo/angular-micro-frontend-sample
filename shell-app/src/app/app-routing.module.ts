import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'micro-app-1',loadChildren:()=>import('micro-app-1/app.module').then(m=>m.AppModule)},
  {path:'micro-app-2',loadChildren:()=>import('micro-app-2/app.module').then(m=>m.AppModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
