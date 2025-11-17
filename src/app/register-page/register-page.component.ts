import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-register-page',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public value4?: string;
  public value5?: string;
  public value6?: string;
}
