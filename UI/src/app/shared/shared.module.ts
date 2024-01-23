import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageSideNavComponent } from './components/page-side-nav/page-side-nav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageSideNavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    PageHeaderComponent,
    PageSideNavComponent,
    PageNotFoundComponent,
    RouterModule
  ]

})
export class SharedModule { }
