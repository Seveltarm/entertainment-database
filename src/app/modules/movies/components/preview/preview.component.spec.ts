import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from '@ngrx/store/testing';

import { PreviewComponent } from './preview.component';
import { NavigateComponent } from 'src/app/components/navigate/navigate.component';

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PreviewComponent,
        NavigateComponent,
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({}),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
