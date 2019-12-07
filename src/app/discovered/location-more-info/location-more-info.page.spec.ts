import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationMoreInfoPage } from './location-more-info.page';

describe('LocationMoreInfoPage', () => {
  let component: LocationMoreInfoPage;
  let fixture: ComponentFixture<LocationMoreInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationMoreInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationMoreInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
