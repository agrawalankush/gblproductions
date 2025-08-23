import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-releases',
    standalone: true,
    imports: [MatCardModule, CommonModule, RouterModule],
    templateUrl: './releases.component.html',
    styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent {
    releases = [
        { title: 'Do Jahaan', desc: 'A soulful journey of love and longing between two worlds.', year: '2025', art: 'assets/cover_art.png' }
    ];
}
