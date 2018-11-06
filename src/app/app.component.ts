import { Component } from '@angular/core';
import { log } from './kaop-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kaop-test';

  @log()
  decoratorTest(testString: string): void {
    console.log('hello');
  }
}
