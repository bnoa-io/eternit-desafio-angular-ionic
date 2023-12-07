import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CallModuleApi } from './modules/call.api.module'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DashboardComponent,
    CallModuleApi
  ],
  template: `<app-dashboard></app-dashboard>`
})
export class AppComponent {
  title = 'angular-desafio-eternit';
}
