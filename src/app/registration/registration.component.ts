import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section>
      <h2>Registration</h2>
      <div>
        <h3>Student Registration</h3>
        <form (submit)="register('Student')">
          <label for="studentName">Name:</label>
          <input id="studentName" [(ngModel)]="studentName" name="studentName" />
          <label for="studentEmail">Email:</label>
          <input id="studentEmail" [(ngModel)]="studentEmail" name="studentEmail" />
          <button type="submit">Register</button>
        </form>
      </div>
      <div>
        <h3>Employee Registration</h3>
        <form (submit)="register('Employee')">
          <label for="employeeName">Name:</label>
          <input id="employeeName" [(ngModel)]="employeeName" name="employeeName" />
          <label for="employeeEmail">Email:</label>
          <input id="employeeEmail" [(ngModel)]="employeeEmail" name="employeeEmail" />
          <button type="submit">Register</button>
        </form>
      </div>
      <div>
        <h3>Admin-Teacher Registration</h3>
        <form (submit)="register('Admin/Teacher')">
          <label for="adminTeacherName">Name:</label>
          <input id="adminTeacherName" [(ngModel)]="adminTeacherName" name="adminTeacherName" />
          <label for="adminTeacherEmail">Email:</label>
          <input id="adminTeacherEmail" [(ngModel)]="adminTeacherEmail" name="adminTeacherEmail" />
          <button type="submit">Register</button>
        </form>
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
      margin-bottom: 2rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input {
      margin-bottom: 1rem;
      padding: 0.5rem;
      width: 100%;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `],
})
export class RegistrationComponent {
  studentName = '';
  studentEmail = '';
  employeeName = '';
  employeeEmail = '';
  adminTeacherName = '';
  adminTeacherEmail = '';

  register(type: string) {
    alert(`${type} registered successfully!`);
  }
}
