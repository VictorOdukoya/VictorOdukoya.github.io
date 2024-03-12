import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackBannerComponent } from './tech-stack-banner.component';

describe('TechStackBannerComponent', () => {
  let component: TechStackBannerComponent;
  let fixture: ComponentFixture<TechStackBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStackBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
