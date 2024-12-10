import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section>
      <h2>About Us</h2>
      <div>
        <h3>History</h3>
        <p>Our institution was established in 1990 with the mission to provide quality education.</p>
      </div>
      <div>
        <h3>Establishment</h3>
        <p>Located in the heart of the city, our campus spans 10 acres of modern facilities.</p>
      </div>
      <div>
        <h3>Motto</h3>
        <p>"Empowering students for a better tomorrow."</p>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 1rem;
    }
    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
    div {
      margin-bottom: 1.5rem;
    }
    h3 {
      color: #28a745;
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  `],
})

export class AboutComponent {}
