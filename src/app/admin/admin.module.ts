import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AdminDetailsComponent } from '../admin-details/admin-details.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [CommonModule, AdminRoutingModule],
    exports: [],
    declarations:[AdminComponent, AdminDetailsComponent]
})

export class AdminModule {}