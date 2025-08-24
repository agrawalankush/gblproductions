import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Release } from '../../interfaces/release.interface';

@Component({
    selector: 'app-releases',
    standalone: true,
    imports: [MatCardModule, CommonModule, RouterModule],
    templateUrl: './releases.component.html',
    styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {
    releases: Release[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<Release[]>('assets/data/releases.json').subscribe(data => {
            this.releases = data;
        });
    }
}
