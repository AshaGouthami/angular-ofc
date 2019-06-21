import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletefilterComponent } from './autocompletefilter.component';

describe('AutocompletefilterComponent', () => {
  let component: AutocompletefilterComponent;
  let fixture: ComponentFixture<AutocompletefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
