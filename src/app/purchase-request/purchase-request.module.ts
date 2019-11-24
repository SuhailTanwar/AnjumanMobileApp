import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';



import { IonicModule } from '@ionic/angular';

import { PurchaseRequestPage } from './purchase-request.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseRequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DropdownModule
    
  ],
  declarations: [PurchaseRequestPage]
})
export class PurchaseRequestPageModule {}
