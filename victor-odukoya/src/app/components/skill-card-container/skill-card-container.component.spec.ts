import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCardContainerComponent } from './skill-card-container.component';

describe('SkillCardContainerComponent', () => {
  let component: SkillCardContainerComponent;
  let fixture: ComponentFixture<SkillCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SkillCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
