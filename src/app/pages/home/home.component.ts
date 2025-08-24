import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Release } from '../../interfaces/release.interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, RouterModule, NgIf],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    featuredRelease: Release | undefined;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<Release[]>('assets/data/releases.json').subscribe(data => {
            this.featuredRelease = data.find(release => release.featured);
        });
    }
}
