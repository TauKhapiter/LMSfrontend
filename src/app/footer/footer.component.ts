import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>© 2024 LMS Project. Developed by Sunny.</p>
    </footer>
  `,
  styles: [`
    footer {
      text-align: center;
      padding: 1rem;
      background-color: #f1f1f1;
    }
  `],
})
export class FooterComponent {}
