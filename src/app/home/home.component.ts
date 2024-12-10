import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Welcome to DPS School LMS.</h1>
    <nav>
      <a routerLink="/admin-login">Admin Login</a>
      <a routerLink="/teacher-login">Teacher Login</a>
      <a routerLink="/staff-login">Non-Teaching Staff Login</a>
    </nav>
  `,
  styles: [`
    h1 {
      text-align: center;
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  `],
})

export class HomeComponent {}
