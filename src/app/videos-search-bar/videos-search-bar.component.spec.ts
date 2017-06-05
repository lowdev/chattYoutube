import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSearchBarComponent } from './videos-search-bar.component';

describe('VideosSearchBarComponent', () => {
  let component: VideosSearchBarComponent;
  let fixture: ComponentFixture<VideosSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
