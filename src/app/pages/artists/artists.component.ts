import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-artists',
    standalone: true,
    imports: [MatCardModule, CommonModule],
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
    artists = [
        { name: 'GBL Mishra', bio: 'GBL Productions blah blah blah blah...', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' },
    ];
}
