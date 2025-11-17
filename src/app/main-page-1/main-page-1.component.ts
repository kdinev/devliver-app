import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-main-page-1',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxAvatarComponent, IgxIconComponent, RouterLink],
  templateUrl: './main-page-1.component.html',
  styleUrls: ['./main-page-1.component.scss']
})
export class MainPage1Component {}
