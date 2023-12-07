import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CallModuleApi } from './modules/call.api.module';
import { DashboardPage } from './dashboard/dashboard.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CallModuleApi, DashboardPage],
  template: `<ion-app><ion-router-outlet></ion-router-outlet></ion-app>`,
})
export class AppComponent {
  constructor() {}
}
