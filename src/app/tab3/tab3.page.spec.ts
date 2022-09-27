import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// import { Component, TemplateRef } from '@angular/core';

// @Component({
//     selector: 'app-tab3',
//     templateUrl:  'tab3.page.html',
//     styles: ['tab3.page.scss'],  
// })  
// export class Tab3Page {
//   constructor() {}
//   option = {
//     slidePerView: 1.5,
//     centeredSlides: true,
//     loop: true,
//     spaceBetween: true,
//   }

// }
