import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'releases', component: ReleasesComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
