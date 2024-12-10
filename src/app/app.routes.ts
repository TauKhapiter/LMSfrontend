import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'bulletin-board', component: BulletinBoardComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }, // Fallback route
];
