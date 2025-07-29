import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-releases',
    standalone: true,
    imports: [MatCardModule, CommonModule],
    templateUrl: './releases.component.html',
    styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent {
    releases = [
        { title: 'Album Three', year: '2021', art: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=1974&auto=format&fit=crop' }
    ];
}
