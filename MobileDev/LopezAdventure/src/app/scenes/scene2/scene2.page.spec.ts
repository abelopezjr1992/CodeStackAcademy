import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Scene2Page } from './scene2.page';

describe('Scene2Page', () => {
  let component: Scene2Page;
  let fixture: ComponentFixture<Scene2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Scene2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
