import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapdowmlistComponent } from './drapdowmlist.component';

describe('DrapdowmlistComponent', () => {
  let component: DrapdowmlistComponent;
  let fixture: ComponentFixture<DrapdowmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrapdowmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrapdowmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
