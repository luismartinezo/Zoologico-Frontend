import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { GuiaComponent } from './Components/guia/guia.component';
import { GuiaAddComponent } from './Components/guia/guia-add/guia-add.component';
import { GuiaEditComponent } from './Components/guia/guia-edit/guia-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guia', component: GuiaComponent },
  { path: 'addGuia', component: GuiaAddComponent },
  {path: 'editGuia/:id', component: GuiaEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }