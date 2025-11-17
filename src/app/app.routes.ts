import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MainPage1Component } from './main-page-1/main-page-1.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page-1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'main-page', component: MainPage1Component, data: { text: 'Main-Page-1' } },
  { path: 'register-page', component: RegisterPageComponent, data: { text: 'Register-Page' } },
  { path: 'login-page', component: LoginPageComponent, data: { text: 'Login-Page' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
