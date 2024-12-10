import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Contact Us</h2>
    <p>Phone: 123-456-7890</p>
    <p>Email: demo&#64;example.com</p>
    <form>
      <label for="message">Message:</label>
      <textarea id="message" [(ngModel)]="message" rows="4"></textarea>
      <button type="submit" (click)="sendMessage()">Send</button>
    </form>
  `,
})

export class ContactUsComponent {
  message: string = '';

  sendMessage() {
    alert(`Message sent: ${this.message}`);
  }
}
