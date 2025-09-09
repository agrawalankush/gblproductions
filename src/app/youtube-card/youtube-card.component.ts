import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Pipe({ name: 'safeUrl', standalone: true })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-youtube-card',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './youtube-card.component.html',
  styleUrl: './youtube-card.component.scss'
})
export class YoutubeCardComponent {
  @Input() videoId: string = '';

  constructor() { }
}
