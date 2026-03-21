import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Release } from '../../interfaces/release.interface';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('slideIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0.95)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {
    releases: Release[] = [];
    featuredRelease: Release | undefined;
    selectedRelease: Release | undefined;

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit(): void {
        this.http.get<Release[]>('assets/data/releases.json').subscribe(data => {
            this.releases = data;
            this.featuredRelease = data.find(release => release.featured);
        });
    }

    openPlayer(release: Release): void {
        this.selectedRelease = release;
    }

    closePlayer(): void {
        this.selectedRelease = undefined;
    }

    goToDetails(release: Release): void {
        this.router.navigate(['/release', release.id]);
    }
}
