import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
