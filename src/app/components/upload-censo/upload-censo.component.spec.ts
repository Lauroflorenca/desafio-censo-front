import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCensoComponent } from './upload-censo.component';

describe('UploadCensoComponent', () => {
  let component: UploadCensoComponent;
  let fixture: ComponentFixture<UploadCensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCensoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadCensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
