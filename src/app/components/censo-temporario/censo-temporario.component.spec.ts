import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoTemporarioComponent } from './censo-temporario.component';

describe('CensoTemporarioComponent', () => {
  let component: CensoTemporarioComponent;
  let fixture: ComponentFixture<CensoTemporarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CensoTemporarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensoTemporarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
