import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
    {path: '', component: AdminComponent},
    { path: 'customers', loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule) }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations:[]
})

export class AdminRoutingModule {}