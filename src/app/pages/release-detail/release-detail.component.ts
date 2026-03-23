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

declare var YT: any;

declare global {
  interface Window {
    YT: any;
  }
}

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
  isPlayerOpen = false;
  player: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.loadYouTubeAPI();
  }

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

  getYouTubeThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  togglePlayer() {
    this.isPlayerOpen = !this.isPlayerOpen;
    if (this.isPlayerOpen) {
      setTimeout(() => {
        this.initializeYouTubePlayer();
      }, 100);
    }
  }

  loadYouTubeAPI() {
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }
  }

  initializeYouTubePlayer() {
    if (!this.release?.links.youtube_id) return;

    const playerId = `yt-player-${this.release.id}`;

    // Only initialize if not already initialized
    if (this.player) {
      this.player.playVideo();
      return;
    }

    try {
      // Ensure YT API is loaded
      if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        console.error('YouTube API not loaded');
        return;
      }

      this.player = new YT.Player(playerId, {
        videoId: this.release.links.youtube_id,
        width: '100%',
        height: 400,
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 0,
          rel: 0,
          fs: 1,
          iv_load_policy: 3,
          playsinline: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
          onError: (event: any) => {
            console.error('YouTube player error:', event.data);
          }
        }
      });
    } catch (error) {
      console.error('Error initializing YouTube player:', error);
    }
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
