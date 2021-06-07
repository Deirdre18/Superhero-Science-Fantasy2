import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarshipsPage } from './starships.page';

describe('StarshipsPage', () => {
  let component: StarshipsPage;
  let fixture: ComponentFixture<StarshipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
