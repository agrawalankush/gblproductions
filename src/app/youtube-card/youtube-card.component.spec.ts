import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCardComponent } from './youtube-card.component';

describe('YoutubeCardComponent', () => {
  let component: YoutubeCardComponent;
  let fixture: ComponentFixture<YoutubeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
