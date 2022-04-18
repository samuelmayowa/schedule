import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Router } from '@angular/router';
import { List } from '../models/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor(private taskService: TaskserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  createList(title: string) {
    this.taskService.createList(title).subscribe((list: List) =>{
      console.log(list);

      //to show routes of event you are
      this.router.navigate(['/lists', list._id]);
    });
  }
}
