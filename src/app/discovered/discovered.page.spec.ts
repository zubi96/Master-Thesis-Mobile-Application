import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoveredPage } from './discovered.page';

describe('DiscoveredPage', () => {
  let component: DiscoveredPage;
  let fixture: ComponentFixture<DiscoveredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoveredPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoveredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
