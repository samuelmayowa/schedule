import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from '../models/tasks.model'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskserviceService, private route: ActivatedRoute, private router: Router) { }
    listId: string;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
      console.log(this.listId);
  });
  }
  createTask(title: string) {
    this.taskService.createTask(title, this.listId).subscribe((newTask: Task) =>{
      console.log(newTask);

      //to show routes of task you are
      this.router.navigate(['../'], {relativeTo: this.route});
    })
  }
}
