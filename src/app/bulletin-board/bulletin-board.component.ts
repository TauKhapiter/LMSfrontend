import { Component } from '@angular/core';

@Component({
  selector: 'app-bulletin-board',
  standalone: true,
  template: `
    <section>
      <h2>Bulletin Board</h2>
      <div>
        <h3>Latest Notifications</h3>
        <ul>
          <li>New course on AI starts next month.</li>
          <li>Mid-term exams announced for 15th June.</li>
        </ul>
      </div>
      <div>
        <h3>News and Press Releases</h3>
        <ul>
          <li>Inauguration of the new library building.</li>
          <li>Teachers' Day celebrations on 5th September.</li>
        </ul>
      </div>
      <div>
        <h3>Achievements</h3>
        <ul>
          <li>Student A won the National Science Fair.</li>
          <li>Our school ranked #1 in district sports.</li>
        </ul>
      </div>
      <div>
        <h3>Recruitment Notifications</h3>
        <ul>
          <li>Open positions for Math and Science teachers.</li>
          <li>Apply for Administrative Officer roles by 30th June.</li>
        </ul>
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
      color: #007acc;
    }
    ul {
      padding-left: 1rem;
    }
    ul li {
      margin-bottom: 0.5rem;
    }
  `],
})

export class BulletinBoardComponent {}
