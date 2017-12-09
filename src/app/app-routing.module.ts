import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from "./index/index.component";
import {Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: IndexComponent, children: [
  ]}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
