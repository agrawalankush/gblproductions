import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-artists',
    standalone: true,
    imports: [MatCardModule, CommonModule, MatButtonModule],
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
    artists = [
        {
            id: 1,
            name: 'Kartik Mishra',
            genre: 'Electronic, Pop',
            bio: 'Kartik Mishra is the visionary founder of GBL Productions, a multi-talented artist known for his innovative approach to music production. With a background in classical music and a passion for modern electronic sounds, Kartik blends diverse influences to create unique and captivating tracks. His work often explores themes of introspection and connection, delivered with a signature blend of intricate melodies and powerful rhythms. He is constantly experimenting with new sounds and technologies to push the boundaries of his artistry.',
            imageUrl: 'assets/KartikMishra_1.jpg',
            styleColor: '#FF5722' // Orange
        },
        // {
        //     id: 2,
        //     name: 'Artist Two',
        //     genre: 'Hip Hop, R&B',
        //     bio: 'Artist Two brings a fresh perspective to the urban music scene. Known for their lyrical prowess and soulful beats, they tell stories that resonate deeply with listeners. Their music is a fusion of raw emotion and polished production, making them a rising star in the industry. They have collaborated with several emerging artists and are currently working on their debut album, promising a blend of conscious lyrics and infectious grooves.',
        //     imageUrl: 'https://via.placeholder.com/400x400/673AB7/FFFFFF?text=Artist+Two',
        //     styleColor: '#673AB7' // Deep Purple
        // },
        // {
        //     id: 3,
        //     name: 'Artist Three',
        //     genre: 'Indie Rock',
        //     bio: 'Artist Three crafts atmospheric soundscapes with a distinctive indie rock edge. Their music is characterized by dreamy guitars, evocative vocals, and introspective lyrics that invite listeners into a world of their own. Having performed at various local festivals, they are building a dedicated fanbase with their authentic sound and captivating live performances. Their latest EP has received critical acclaim for its originality and emotional depth.',
        //     imageUrl: 'https://via.placeholder.com/400x400/009688/FFFFFF?text=Artist+Three',
        //     styleColor: '#009688' // Teal
        // }
    ];

    // Object to keep track of which artist's full bio is shown
    showFullBio: { [key: number]: boolean } = {};

    toggleBio(artistId: number) {
        this.showFullBio[artistId] = !this.showFullBio[artistId];
    }

    getShortBio(bio: string, artistId: number): string {
        if (this.showFullBio[artistId]) {
            return bio;
        }
        const words = bio.split(' ');
        if (words.length > 30) {
            return words.slice(0, 30).join(' ') + '...';
        }
        return bio;
    }

    shouldShowReadMore(bio: string, artistId: number): boolean {
        const words = bio.split(' ');
        return words.length > 30 && !this.showFullBio[artistId];
    }

    shouldShowReadLess(bio: string, artistId: number): boolean {
        const words = bio.split(' ');
        return words.length > 30 && this.showFullBio[artistId];
    }
}
