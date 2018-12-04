import { Component } from '@angular/core';
import { log } from './kaop-test';
import { beforeMethod } from 'kaop-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kaop-test';

  @beforeMethod(log)
  decoratorTest(testString: string): void {
    console.log('hello');
  }
}
