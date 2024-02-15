import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPostComponent } from './cadastroPost.component';

describe('PostComponent', () => {
  let component: CadastroPostComponent;
  let fixture: ComponentFixture<CadastroPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
