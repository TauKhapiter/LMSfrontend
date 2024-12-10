import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/registration">Registration</a></li>
        <li><a routerLink="/bulletin-board">Bulletin Board</a></li>
        <li><a routerLink="/contact-us">Contact Us</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav ul {
      list-style-type: none;
      display: flex;
      gap: 1rem;
    }
    nav ul li a {
      text-decoration: none;
      color: blue;
    }
  `],
})


export class NavbarComponent {}
