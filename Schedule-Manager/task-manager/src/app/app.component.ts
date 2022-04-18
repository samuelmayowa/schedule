import { Component } from '@angular/core';
import { TaskserviceService } from '../../src/app/taskservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager';

  constructor() { }

  ngOnInit(): void {
  }

 
}
