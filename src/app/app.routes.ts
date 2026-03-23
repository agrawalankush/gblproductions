import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AboutComponent } from './pages/about/about.component';
import { ReleaseDetailComponent } from './pages/release-detail/release-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'releases', component: ReleasesComponent, data: { animation: 'ReleasesPage' } },
  { path: 'release/:id', component: ReleaseDetailComponent, data: { animation: 'ReleaseDetailPage' } },
  { path: 'artists', component: ArtistsComponent, data: { animation: 'ArtistsPage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
];
