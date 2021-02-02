import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenShareComponent } from './screen-share/screen-share.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ScreenShareComponent
  }
];

@NgModule({
  declarations: [
    ScreenShareComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SupportModule { }
