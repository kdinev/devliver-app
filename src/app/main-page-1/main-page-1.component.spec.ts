import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxButtonDirective, IGX_TABS_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular';
import { MainPage1Component } from './main-page-1.component';

describe('MainPage1Component', () => {
  let component: MainPage1Component;
  let fixture: ComponentFixture<MainPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPage1Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxButtonDirective, IGX_TABS_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
