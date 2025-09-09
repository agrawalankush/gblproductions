import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Release } from '../../interfaces/release.interface';
import { YoutubeCardComponent } from '../../youtube-card/youtube-card.component';

@Component({
  selector: 'app-release-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, YoutubeCardComponent],
  templateUrl: './release-detail.component.html',
  styleUrl: './release-detail.component.scss'
})
export class ReleaseDetailComponent implements OnInit {
  release: Release | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const releaseId = params.get('id');
      this.http.get<Release[]>('assets/data/releases.json').subscribe(data => {
        this.release = data.find(r => r.id === releaseId);
      });
    });
  }
}
