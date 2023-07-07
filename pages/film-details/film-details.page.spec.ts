import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmDetailsPage } from './film-details.page';

describe('FilmDetailsPage', () => {
  let component: FilmDetailsPage;
  let fixture: ComponentFixture<FilmDetailsPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(FilmDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
