import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-release-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './release-detail.component.html',
  styleUrl: './release-detail.component.scss'
})
export class ReleaseDetailComponent implements OnInit {
  release: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const releaseId = params.get('id');
      // In a real application, you would fetch the release details from a service based on the id
      this.release = {
        title: releaseId,
        desc: 'A soulful journey of love and longing between two worlds.',
        year: '2025',
        art: 'assets/cover_art.png',
        lyrics: `तू नहीं कल्पना, है तू मेरा यकीन\nहै नहीं तू यहाँ, फिर भी तू लाज़मी\n\nतेरी कमी खलती रही, तेरी छवि चलती रही\nतू जो नहीं, मैं भी नहीं, तेरे बिना जीना नहीं\n\nजानम मैं तेरा, बरसता आसमान\nराहें तू मेरी, मैं तेरा दो जहाँ\n\nसारी सारी दिन, सारी रात\nकरता रहूँ, तुझसे बात\n\nदुनिया भले, सपनों की थी\nचाहत मेरी, जन्मों की थी\n\nतेरी आहटें, मीठी राहतें\nएहसास वो महका, ये दीवाना बहका\n\nजानम मैं तेरा, बरसता आसमान\nराहें तू मेरी, मैं तेरा दो जहाँ\n\nसर चढ़ के जो, मेरे रहे\nतेरा नशा, कहते उसे\n\nदिल की ज़मीन, पे बस गया\nरूप तेरा, माया तेरी\n\nसाथ तेरा जो पाया, मलंग मैं हो गया\nआँखों में तेरी, मैं कहीं खो गया\n\nजानम मैं तेरा, बरसता आसमान\nराहें तू मेरी, मैं तेरा दो जहाँ.`,
        behindTheScenes: {
          description: ``,
          images: [
            'assets/bts/bts0.jpeg',
            'assets/bts/bts1.jpeg',
            'assets/bts/bts3.jpeg',
            'assets/bts/bts4.jpeg',
            'assets/bts/bts5.jpeg',
            'assets/bts/bts8.jpeg',
          ]
        }
      };
    });
  }
}
