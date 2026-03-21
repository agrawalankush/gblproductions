import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Release } from '../../interfaces/release.interface';
import { YoutubeCardComponent } from '../../youtube-card/youtube-card.component';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-release-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, YoutubeCardComponent, SafePipe],
  templateUrl: './release-detail.component.html',
  styleUrl: './release-detail.component.scss'
})
export class ReleaseDetailComponent implements OnInit {
  release: Release | undefined;
  allReleases: Release[] = [];
  otherReleases: Release[] = [];
  btsIndex = 0;
  currentIndex = 0;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.http.get<Release[]>('assets/data/releases.json').subscribe(data => {
      this.allReleases = data;
      this.route.paramMap.subscribe(params => {
        const releaseId = params.get('id');
        this.release = data.find(r => r.id === releaseId);
        this.otherReleases = data.filter(r => r.id !== releaseId);
        this.currentIndex = data.findIndex(r => r.id === releaseId);
        this.btsIndex = 0;
      });
    });
  }

  goToPrevRelease() {
    if (this.allReleases.length > 1 && this.currentIndex > 0) {
      const prevId = this.allReleases[this.currentIndex - 1].id;
      this.router.navigate(['/release', prevId]);
    }
  }

  goToNextRelease() {
    if (this.allReleases.length > 1 && this.currentIndex < this.allReleases.length - 1) {
      const nextId = this.allReleases[this.currentIndex + 1].id;
      this.router.navigate(['/release', nextId]);
    }
  }

  getYouTubeEmbedUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?enablejsapi=1`
    );
  }

  btsPrev() {
    if (this.release && this.release.behindTheScenes && this.btsIndex > 0) {
      this.btsIndex--;
    }
  }

  btsNext() {
    if (
      this.release &&
      this.release.behindTheScenes &&
      this.btsIndex < (this.release.behindTheScenes?.images?.length ?? 0) - 1
    ) {
      this.btsIndex++;
    }
  }
}
